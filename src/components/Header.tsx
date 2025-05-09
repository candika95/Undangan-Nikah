import { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { COUPLE_NAMES } from '../constants';
import { motion } from 'framer-motion';

interface HeaderProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const Header = ({ isMusicPlaying, toggleMusic }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Cerita Kita', href: '#story' },
    { name: 'Lokasi', href: '#details' },
    { name: 'Jadwal', href: '#schedule' },
    { name: 'Galeri', href: '#gallery' },
    // { name: 'RSVP', href: '#guestbook' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <span className={`font-script text-2xl ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
              {COUPLE_NAMES.groom} & {COUPLE_NAMES.bride}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isMusicPlaying ? 'Mute music' : 'Play music'}
            >
              {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full mr-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label={isMusicPlaying ? 'Mute music' : 'Play music'}
            >
              {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;