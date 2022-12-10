import Location from "../components/location";
import Navbar from "../components/navbar";
import ThreeGlobe from "../components/threeglobe";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <div className="">
        <Navbar type={1} />
      </div>
      <div className="-mt-[15%] sm:-mt-[4%]  bg-[url('/bg-home-mobile.png')] sm:bg-[url('/bg-home.png')] bg-contain bg-no-repeat ">
        <ThreeGlobe />
      </div>
      <div>
        <Location />
      </div>
    </div>
  );
}
