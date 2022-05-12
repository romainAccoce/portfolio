import './map.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const coordinates = [48.82606870624636, 2.3578566728027104];

const Map = () => {
    return (
        <MapContainer className='map-container' center={coordinates} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=yu6G433GVhDlDGWmQSdQ"
            />
            <Marker position={coordinates}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;