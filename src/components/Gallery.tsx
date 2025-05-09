import { useState } from 'react';
import { GALLERY_PHOTOS } from '../constants';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="gallery" className="py-20 bg-primary-50">
      <div className="section-container">
        <div className="section-title">
          <h2>Galeri Foto</h2>
          <p>Sekilas momen kenangan kita</p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_PHOTOS.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: photo.id * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
              onClick={() => openLightbox(photo.src)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-64 transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="border-2 border-white rounded-md py-2 px-4">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain" />
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;