import { LOVE_STORY } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  return (
    <section id="story" className="bg-white py-20">
      <div className="section-container">
        <div className="section-title">
          <h2>Cerita Cinta Kita</h2>
          <p>Perjalanan yang mempertemukan kita</p>
        </div>
        
        <div className="mt-16">
          {LOVE_STORY.map((item, index) => (
            <StoryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StoryItemProps {
  item: {
    id: number;
    date: string;
    title: string;
    description: string;
    image?: string;
  };
  index: number;
}

const StoryItem = ({ item, index }: StoryItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 last:mb-0`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 p-4">
        <div className="overflow-hidden rounded-lg shadow-md h-full">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className={`${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <div className="text-accent-600 font-medium mb-2">{item.date}</div>
          <h3 className="text-2xl font-serif text-primary-800 mb-3">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;