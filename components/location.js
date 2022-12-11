import Link from "next/link";

function Location({ location }) {
  return (
    <Link href="/main">
      <div className="">
        <div className="absolute bottom-6 right-6  ">
          <div className="flex flex-nowrap">
            <img className=" h-8 w-8" src="/location.svg"></img>
            <h1 className="text-2xl font-mono">Location:</h1>
            <h1 className="text-2xl font-mono">{location}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Location;
