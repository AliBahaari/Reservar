import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

function Map() {
  return (
    <MapContainer
      style={{ width: "200px", height: "200px", fontFamily: "inherit" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
    >
      <TileLayer attribution='&copy; <a href="#">Reservar</a>' url="" />
      <Marker position={[51.505, -0.09]}>
        <Popup>متن آزمایشی</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
