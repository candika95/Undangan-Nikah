import { Heart } from 'lucide-react';
import { COUPLE_NAMES } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h3 className="font-script text-4xl mb-2">
            {COUPLE_NAMES.groom} & {COUPLE_NAMES.bride}
            </h3>
            <p className="text-primary-200">Terima kasih telah berbagi kebahagiaan kami</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#hero" className="text-white hover:text-primary-200 transition-colors">Beranda</a>
            <a href="#story" className="text-white hover:text-primary-200 transition-colors">Cerita Kita</a>
            <a href="#details" className="text-white hover:text-primary-200 transition-colors">Detail</a>
            <a href="#gallery" className="text-white hover:text-primary-200 transition-colors">Galeri</a>
            {/* <a href="#guestbook" className="text-white hover:text-primary-200 transition-colors">RSVP</a> */}
          </div>
          
          <div className="flex items-center text-primary-200 text-sm">
            <span>&copy; {currentYear} • Dibuat dengan</span>
            <Heart className="h-4 w-4 mx-1 fill-current" />
            <span>oleh adik tercinta, Candika 💪</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;