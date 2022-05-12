import './contact.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const center = [48.82606870624636, 2.3578566728027104];

const Contact = () => {
    return (
        <MapContainer className='map-container' center={center} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                // attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> contributors'
                url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=yu6G433GVhDlDGWmQSdQ"
            />
            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
        </MapContainer>
    );
};

export default Contact;