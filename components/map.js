import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";

function changeView({ coords }) {
  const map = useMap();
  map.setView(coords, 20);
  return null;
}

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
  });
}

export default function Map() {
  const position = [46.75480070786659, 23.582383227166247]; //spitalul de recuperare
  const center = position;

  return (
    <MapContainer center={center} zoom={10} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={
          "https://api.mapbox.com/styles/v1/lucasainenco/" +
          process.env.NEXT_PUBLIC_MAPBOX_DEV_API +
          "/tiles/{z}/{x}/{y}?access_token=" +
          process.env.NEXT_PUBLIC_MAPBOX_ID
        }
      />
      <Marker position={position} icon={createIcon("/location.svg")}></Marker>
      <changeView coords={center} />
    </MapContainer>
  );
}
