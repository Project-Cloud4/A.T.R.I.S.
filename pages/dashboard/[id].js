import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Resources from "../../components/resources";
import incrementby from "../../utils/increment";

function Widget({ props }) {
  const [check, setCheck] = useState(props.cty === "on");
  let title = props.title;
  let [type, setType] = useState(props.type);
  let [cty, setCty] = useState(props.cty);

  useEffect(() => {
    if (type !== "3" && type !== "1") {
      if (check === true) {
        setType("0");
        setCty("on");
      }
      if (check === false) {
        setType("2");
        setCty("off");
      }
    }
  }, [check]);

  return (
    <div
      className={
        "card w-1/2 h-64 shadow-xl " +
        (type === "0" || type === "1"
          ? "bg-gradient-to-tr from-primary to-secondary"
          : type === "3"
          ? "bg-secondary"
          : "bg-base-100")
      }
      onClick={() => {
        props["action"]();
      }}
    >
      <div className="card-body justify-center items-center">
        <h2 className="card-title justify-center text-5xl text-mono text-white">
          {title}
          <img src={props.img} className="h-16 invert "></img>
        </h2>
        <div className="flex-1 flex justify-center items-center text-white">
          {type === "3" ? (
            <button className="text-2xl font-bold text-mono btn-primary btn text-white">
              {cty}
            </button>
          ) : type === "2" ? (
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-5xl text-mono text-white ">{cty}</h3>
              <input
                type="checkbox"
                className="toggle mt-3"
                onChange={() => {
                  setCheck(!check);
                }}
              />
            </div>
          ) : type === "0" ? (
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-5xl text-mono text-white">{cty}</h3>
              <input
                defaultChecked={true}
                type="checkbox"
                className="toggle mt-3"
                onChange={() => {
                  setCheck(!check);
                }}
              />
            </div>
          ) : (
            <h3 className="text-5xl text-mono text-white">{cty}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminApps() {
  const [modal, setModal] = useState(false);
  const [usage, setUsage] = useState("14/20");
  const { id: shelter } = useRouter().query;

  let actModal = () => {
    setModal(!modal);
  };

  let widgets = [
    {
      title: "On Their Way",
      cty: "3",
      type: "1",
      img: "/icons/follow_the_signs_black_24dp.svg",
      action: () => {},
    },
    {
      title: "Energy",
      cty: "on",
      type: "0",
      img: "/icons/bolt_black_24dp.svg",
      action: () => {},
    },
    {
      title: "Heat",
      cty: "off",
      type: "2",
      img: "/icons/heat_pump_black_24dp.svg",
      action: () => {},
    },
    {
      title: "Resources",
      cty: "show",
      type: "3",
      img: "/icons/star_black_24dp.svg ",
      action: actModal,
    },
  ];

  return (
    <div className="h-screen w-screen z-1">
      <div className="absolute  z-10">
        {modal === true ? <Resources exitmodal={actModal} /> : ""}
      </div>
      <div className="flex flex-row gap-4 ">
        <div className="basis-1/3 h-screen flex flex-col items-center justify-center relative z-0">
          <h1 className="text-9xl text-primary basis-1/6 font-bold font-mono inline-block relative z-3 ">
            Dashboard
          </h1>
          <div className=" card h-1/2 w-[80%] bg-secondary shadow-xl ">
            <div className="card-body">
              <div className="flex justify-center items-center flex-col">
                <t className="text-center text-5xl text-accent font-bold font-mono">
                  People:
                </t>
                <t className="text-center text-5xl text-accent font-bold font-mono ">
                  {usage}
                </t>
              </div>
              <div className=" flex justify-center items-center flex-1 text-3xl">
                <div
                  className="radial-progress text-accent"
                  style={{ "--value": 70, "--size": "12rem" }}
                >
                  70%
                </div>
              </div>
              <div className="card-actions justify-end">
                {[1, 5, 10].map((number) => {
                  return (
                    <button
                      key={number}
                      onClick={async () => {
                        setUsage(incrementby(usage, number));
                        await fetch(
                          "http://localhost:3000/api/shelter/" + shelter,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              action: "update",
                              usage: usage,
                            }),
                          }
                        );
                      }}
                      className="btn btn-primary  text-base-200 font-mono text-3xl"
                    >
                      {"+" + number}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 place-content-around place-items-center  flex-1">
          {widgets.map((widget) => {
            return <Widget props={widget} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminApps;
