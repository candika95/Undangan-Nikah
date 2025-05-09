import { useEffect } from 'react';
import { EVENT_DETAILS } from '../constants';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Map, Calendar, Clock } from 'lucide-react';

const EventDetails = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        delete L.Icon.Default.prototype._getIconUrl;
        
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
      });
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="details" className="py-20 bg-primary-50">
      <div className="section-container">
        <div className="section-title">
          <h2>Lokasi</h2>
          <p>Semua yang perlu Anda ketahui tentang hari istimewa kami</p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {/* Details */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif text-primary-800 mb-6">Kapan & Dimana</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Calendar className="text-primary-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Tanggal</h4>
                  <p className="text-gray-700">{EVENT_DETAILS.date}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Clock className="text-primary-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Waktu</h4>
                  <p className="text-gray-700">{EVENT_DETAILS.time}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Map className="text-primary-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Lokasi</h4>
                  <p className="text-gray-700">{EVENT_DETAILS.location.name}</p>
                  <p className="text-gray-600">{EVENT_DETAILS.location.address}</p>
                  <p className="text-gray-600">{EVENT_DETAILS.location.city}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${EVENT_DETAILS.location.coordinates[0]},${EVENT_DETAILS.location.coordinates[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Tunjukkan Arah
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <MapContainer 
              center={EVENT_DETAILS.location.coordinates} 
              zoom={13} 
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={EVENT_DETAILS.location.coordinates}>
                <Popup>
                  <div>
                    <strong>{EVENT_DETAILS.location.name}</strong><br />
                    {EVENT_DETAILS.location.address}<br />
                    {EVENT_DETAILS.location.city}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;