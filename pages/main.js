import dynamic from "next/dynamic";
import Location from "../components/location";

import Navbar from "../components/navbar";
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Main() {
  return (
    <div className="relative z-0 h-screen w-screen">
      <div className="fixed z-20">
        <div className="z-11">
          <Navbar />
        </div>
        <img
          className="hidden sm:block z-9 -mt-[1%] "
          src="/bg-home-bgless.png"
        />
        <img
          className="block sm:hidden  z-9 -mt-[3%]"
          src="/bg-home-bgless.png"
        />
      </div>

      <div className="relative z-0 ">
        <Map />
      </div>
    </div>
  );
}
