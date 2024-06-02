import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const pinIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={pinIcon}>
      <Popup>
        <div>
          <h2>{item.name}</h2>
          <p>{item.address}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
