import { useEffect, useState } from "react";
import getLocation from "../utils/locate";

export async function getServerSideProps(context) {
  const location = await getLocation(context);
  return {
    props: {
      city: location,
    },
  };
}

export default function Navigator({ city }) {
  console.log(city);
  //useEffect(() => {
  //  navigator.geolocation.getCurrentPosition(
  //    (position) => {
  //      console.log(position.coords);
  //    },
  //    (err) => {
  //      console.log(err);
  //    }
  //  );
  //}, []);

  return <div>abcd</div>;
}
