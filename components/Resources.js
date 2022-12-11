import { useState } from "react";

function Resource({ props, update }) {
  return (
    <div className="alert shadow-lg h-1/3 mb-2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold font-mono text-3xl">{props.name}</h3>
        </div>
      </div>
      <div className="text-2xl font-mono font-bold flex-1">{props.cty}</div>
      <div className="flex-none">
        <img src={props.img} className="h-16 invert "></img>
        <button
          onClick={() => update(props.data)}
          className="btn btn-sm h-20 w-16 text-2xl font-mono"
        >
          See
        </button>
      </div>
    </div>
  );
}

function Resources({ exitmodal }) {
  const [summary, setSummary] = useState(false);

  let updateSummary = (data) => {
    setSummary(data);
  };

  const resources = [
    {
      name: "Food",
      cty: "450 Ratios",
      data: "=> Beans",
      img: "/icons/local_dining_black_24dp.svg",
    },

    {
      name: "Water",
      cty: "700 Liters",
      data: "=> 1400 x0.5 L",
      img: "/icons/water_drop_black_24dp.svg",
    },

    {
      name: "Medicine",
      cty: "Covered",
      data: "=> Insuline",
      img: "/icons/healing_black_24dp.svg",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center relative  z-24">
      <div className="z-50 h-1/2 w-1/3 card card-compact bg-base-300 shadow-xl  p-10">
        <button
          className="btn btn-primary h-8 w-11 text-3xl absolute -mt-8 -ml-8"
          onClick={() => {
            exitmodal();
          }}
        >
          X
        </button>
        {resources.map((resource) => {
          return (
            <Resource
              key={resource.name}
              props={resource}
              update={updateSummary}
            />
          );
        })}
      </div>
      {summary !== false ? (
        <div className="card w-96 h-1/2 bg-base-300 ml-8 shadow-xl">
          <div className="card-body">
            <h1 className="text-xl">{summary}</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Resources;
