import { useEffect } from "react";
import Location from "../components/location";
import Navbar from "../components/navbar";
import ThreeGlobe from "../components/threeglobe";
import getLocation from "../utils/locate";
export async function getServerSideProps(context) {
  const location = await getLocation(context);
  return { props: { location: location } };
}

export default function Home({ location }) {
  return (
    <div className="w-screen h-screen ">
      <div className="">
        <Navbar type={"homepage"} />
      </div>
      <div className="-mt-[15%] sm:-mt-[4%]  bg-[url('/bg-home-mobile.png')] sm:bg-[url('/bg-home.png')] bg-contain bg-no-repeat ">
        <ThreeGlobe />
      </div>
      <div>
        <Location location={location} />
      </div>
    </div>
  );
}
