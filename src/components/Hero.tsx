import { useEffect, useState } from 'react';
import { COUPLE_NAMES, WEDDING_DATE, EVENT_DETAILS } from '../constants';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-lg mb-3"
        >
          Kami Akan Segera Menikah!
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="couple-name text-white mb-6"
        >
          {COUPLE_NAMES.groom} & {COUPLE_NAMES.bride}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-8"
        >
          <div className="text-white text-xl font-light">{EVENT_DETAILS.date}</div>
          <div className="text-white text-xl mt-1">Cupuwatu Ⅱ	Sleman {EVENT_DETAILS.location.city}</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <CountdownTimer targetDate={WEDDING_DATE} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10"
        >
          <a href="#schedule" className="btn-primary mr-4">
          Rangkaian Acara
          </a>
          <a href="#details" className="btn-secondary">
            Detail
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;