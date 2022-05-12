import './map.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// Resolve misslocation of the marker icon image in Leaflet
import L from 'leaflet';
L.Icon.Default.imagePath='images/leaflet_images/';

const coordinates = [48.814552763145905, 2.406253325234966];

const Map = () => {
    return (
        <MapContainer className='map-container' center={coordinates} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=yu6G433GVhDlDGWmQSdQ"
            />
            <Marker position={coordinates} />
        </MapContainer>
    );
};

export default Map;