import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Company } from '../types';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useEffect, useRef } from 'react';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const selectedIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 46],
  iconAnchor: [15, 46],
});

interface MapProps {
  companies: Company[];
  selectedCompany: Company | null;
}

function MarkerWithPopup({ company, selectedCompany }: { company: Company, selectedCompany: Company | null }) {
  const map = useMap();
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (selectedCompany?.id === company.id) {
      map.flyTo(
        [company.location.lat, company.location.lng],
        16,
        { animate: true }
      );
      markerRef.current?.openPopup();
    }
  }, [selectedCompany, company, map]);

  return (
    <Marker
      ref={markerRef}
      position={[company.location.lat, company.location.lng]}
      icon={company.id === selectedCompany?.id ? selectedIcon : defaultIcon}
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {companies.map((company) => (
        <MarkerWithPopup 
          key={company.id} 
          company={company} 
          selectedCompany={selectedCompany}
        />
      ))}
    </MapContainer>
  );
}