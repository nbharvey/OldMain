import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Custom cow icon
const cowIcon = new L.Icon({
  iconUrl: "/images/cow-marker.png", // replace with your cow marker image
  iconSize: [50, 50],
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
          Old Main Bar & Grill <br /> 1103 Main St, Crete, NE
        </Popup>
      </Marker>
    </MapContainer>
  );
}