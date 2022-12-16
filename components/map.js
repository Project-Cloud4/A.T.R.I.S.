import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useChannel, configureAbly } from "@ably-labs/react-hooks";
import getLocation from "../utils/locate";
import getShelters from "../utils/getShelters";
import incrementby from "../utils/increment.js";
import "leaflet/dist/leaflet.css";

const Shelter = ({ shelter }) => {
  configureAbly({ key: process.env.NEXT_PUBLIC_ABLY_API_KEY });
  const [usage, setUsage] = useState(shelter.usage);
  const [channel] = useChannel("usage", (msg) => {
    setUsage(msg.data);
  });

  return (
    <Marker
      key={shelter.name}
      position={[shelter.position[1], shelter.position[0]]}
      icon={createIcon("/location.svg")}
    >
      <Popup>
        <div>
          <h1 className="text-2xl font-mono font-bold">{shelter.name}</h1>
          <div>
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xl">{usage}</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg flex flex-row justify-center items-center">
              <img src="/icons/medicine.svg" />
              Medicine
            </h1>
            <div>{shelter.medicine}</div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={async () => {
                await channel.publish("update", incrementby(usage, 1));
              }}
              className="btn btn-primary"
            >
              On My Way!
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 20);
  return null;
}

function createIcon(url) {
  return new Icon({
    iconUrl: url,
  });
}

export default function Map() {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState("");
  const [shelters, setShelters] = useState(" ");
  const [position, setPosition] = useState([]);
  const [center, setCenter] = useState([]);
  useEffect(() => {
    const receiveLocation = async () => {
      const _res = await fetch("https://artis.bytecrowds.workers.dev/");
      const data = await _res.json();
      //setPlace(data.region_name);
      setPlace("Cluj");
      //setShelters(await getShelters(data.region_name));
      setShelters(await getShelters("Cluj"));
    };
    receiveLocation();
  }, []);

  useEffect(() => {
    setCenter(shelters[0].position);
    setLoading(false);
  }, [shelters]);

  return (
    <div>
      {loading || !center ? (
        <div className="h-screen w-screen flex justify-center items-center text-5xl">
          loading...
        </div>
      ) : (
        <MapContainer
          center={[center[1], center[0]]}
          zoom={10}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={
              "https://api.mapbox.com/styles/v1/lucasainenco/" +
              process.env.NEXT_PUBLIC_MAPBOX_DEV_API +
              "/tiles/{z}/{x}/{y}?access_token=" +
              process.env.NEXT_PUBLIC_MAPBOX_ID
            }
          />
          {shelters.map((shelter) => {
            return <Shelter shelter={shelter} />;
          })}
          <ChangeView coords={[center[1], center[0]]} />
        </MapContainer>
      )}
    </div>
  );
}
