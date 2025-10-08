import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Custom cow icon
const cowIcon = new L.Icon({
  iconUrl: "/SVGLogoCropped.svg", // replace with your cow marker imagetheoi
  iconSize: [40, 40],
  iconAnchor: [25, 50], // bottom center
  popupAnchor: [0, -50],
});

export default function OldMainMap() {
  const position: [number, number] = [40.616589208899256, -96.94783458736606]; // Old Main coordinates

  return (
      <MapContainer center={position} zoom={16} className="h-[400px] w-full">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={cowIcon}>
        <Popup>
        Old Main Restaurant + Bar <br /> 1103 Main St, Crete, NE
        </Popup>
      </Marker>
    </MapContainer>
  );
}