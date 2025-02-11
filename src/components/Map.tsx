import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Company } from '../types';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  companies: Company[];
  selectedCompany: Company | null;
}

// 1. Création d'un composant de Marker qui se recentre sur le clic
function MarkerWithRecenter({ company }: { company: Company }) {
  const map = useMap();

  // 2. Fonction de recentrage sur le marker cliqué
  const handleMarkerClick = () => {
    // Zoom inchangé, mais vous pouvez le modifier
    // Vous pouvez aussi utiliser map.flyTo(...) pour un effet différent
    map.flyTo([company.location.lat, company.location.lng], 16, {
      animate: true,
    });
  };

  return (
    <Marker
      position={[company.location.lat, company.location.lng]}
      icon={defaultIcon}
      // 3. Event handler du clic sur le marker
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <Popup offset={[0, -20]}>
        <div className="p-2">
          <h3 className="font-bold">{company.name}</h3>
          <p className="text-sm">{company.address}</p>
          <p className="text-sm mt-2">{company.description}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default function Map({ companies, selectedCompany }: MapProps) {
  return (
    <MapContainer
      center={[44.837789, -0.579180]}
      zoom={13}
      className="w-full h-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap
        </a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {companies.map((company) => (
        <MarkerWithRecenter key={company.id} company={company} />
      ))}
    </MapContainer>
  );
}
