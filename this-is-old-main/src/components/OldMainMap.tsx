import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { colors } from "../utils/colors";

const cowIcon = new L.DivIcon({
  html: `
    <div
      style="
        background: #120A04;
        border: 2px solid #AF9060;
        border-radius: 9999px;
        padding: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      "
    >
      <img
        src="/SVGLogoCropped.svg"
        style="
          width: 32px;
          height: 32px;
          object-fit: contain;
        "
      />
    </div>
  `,
  className: "",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export default function OldMainMap() {
  const position: [number, number] = [
    40.623507351547566,
    -96.9616896206324,
  ];

  return (
    <MapContainer
      center={position}
      zoom={16}
      className="h-[400px] w-full rounded-2xl"
      style={{
        border: `1px solid ${colors.antique_gold}`,
        filter: "grayscale(20%) contrast(105%) brightness(90%)",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      <Marker position={position} icon={cowIcon}>
        <Popup>
          Old Main Restaurant + Bar
          <br />
          1103 Main St, Crete, NE
        </Popup>
      </Marker>
    </MapContainer>
  );
}