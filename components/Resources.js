function Resource({ props }) {
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
        <button className="btn btn-sm h-20 w-16 text-2xl font-mono">See</button>
      </div>
    </div>
  );
}

function Resources({ exitmodal }) {
  const resources = [
    {
      name: "Food",
      cty: "450 Ratios",
    },

    {
      name: "Water",
      cty: "700 Liters",
    },

    {
      name: "Medicine",
      cty: "Covered",
    },
  ];

  return (
    <div className="h-screen w-screen flex justify-center items-center relative z-24">
      <div className="z-50 h-1/2 w-[50%] card card-compact w-96 bg-base-300 shadow-xl absolute p-10">
        <button
          className="btn btn-primary h-8 w-11 text-3xl absolute -mt-8 -ml-8"
          onClick={() => {
            exitmodal();
          }}
        >
          X
        </button>
        {resources.map((resource) => {
          return <Resource key={resource.name} props={resource} />;
        })}
      </div>
    </div>
  );
}

export default Resources;
