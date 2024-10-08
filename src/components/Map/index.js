import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";

// Resolve misslocation of the marker icon image in Leaflet
import L from "leaflet";

L.Icon.Default.imagePath = "images/leaflet_images/";

const coordinates = [45.52414878883637, -73.6170186032513];

const Map = () => {
  return (
    <div data-aos="zoom-in-up" className="map">
      <MapContainer
        className="map__container"
        center={coordinates}
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={true}
      >
        <TileLayer
          attribution='<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=yu6G433GVhDlDGWmQSdQ"
        />
        <ZoomControl position="bottomleft" />
        <div className="map__container__marker">
          <Marker position={coordinates} />
        </div>
      </MapContainer>
    </div>
  );
};

export default Map;
