function Widget({ props }) {
  return (
    <div
      className={
        "card w-1/2 h-64 shadow-xl " +
        (props.type === "0"
          ? "bg-gradient-to-tr from-primary to-secondary"
          : props.type === "3"
          ? "bg-secondary"
          : "bg-neutral")
      }
      onClick={props.action !== null ? props.action : ""}
    >
      <div className="card-body justify-center items-center">
        <h2 className="card-title justify-center text-5xl text-mono  ">
          {props.title}
        </h2>
        <div className="flex-1 flex justify-center items-center">
          {props.type === "3" ? (
            <button className="text-2xl font-bold text-mono btn-primary btn">
              {props.cty}
            </button>
          ) : (
            <h3 className="text-5xl text-mono">{props.cty}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminApps() {
  let widgets = [
    { title: "On Their Way", cty: "3", type: "0", action: "" },
    { title: "Energy", cty: "working", type: "0", action: "" },
    { title: "Heat", cty: "off", type: "2", action: "" },
    { title: "Resources", cty: "show", type: "3", action: "" },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row gap-4 ">
        <div className="basis-1/3 h-screen flex flex-col items-center justify-center">
          <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary basis-1/6 font-bold inline-block">
            Dashboard
          </h1>
          <div className=" card h-1/2 w-[80%] bg-secondary shadow-xl ">
            <div className="card-body">
              <div className="flex justify-center items-center flex flex-col">
                <t className="text-center text-5xl text-accent font-bold font-mono">
                  People:
                </t>
                <t className="text-center text-5xl text-accent font-bold font-mono ">
                  14/20
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
                <button className="btn btn-primary  text-base-200 font-mono text-3xl">
                  +1
                </button>
                <button className="btn btn-primary  text-base-200 font-mono text-3xl">
                  +5
                </button>
                <button className="btn btn-primary  text-base-200 font-mono text-3xl">
                  +10
                </button>
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
