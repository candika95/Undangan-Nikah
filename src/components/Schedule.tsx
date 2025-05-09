import { SCHEDULE_ITEMS } from '../constants';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="section-container">
        <div className="section-title">
          <h2>Rangkaian Acara</h2>
          <p>Rangkaian Acara di Hari Istimewa Kami</p>
        </div>
        
        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
          
          {/* Schedule Items */}
          <div className="space-y-12">
            {SCHEDULE_ITEMS.map((item, index) => (
              <ScheduleItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ScheduleItemProps {
  item: {
    id: number;
    time: string;
    title: string;
    description: string;
  };
  index: number;
}

const ScheduleItem = ({ item, index }: ScheduleItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row"
    >
      {/* For Mobile: Stack vertically */}
      <div className="md:hidden mb-4">
        <div className="bg-primary-100 rounded-full py-1 px-4 inline-block">
          <span className="font-medium text-primary-800">{item.time}</span>
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-serif text-primary-800">{item.title}</h3>
          <p className="text-gray-700 mt-1">{item.description}</p>
        </div>
      </div>
      
      {/* For Desktop: Side by side */}
      <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:pr-12 text-right' : 'md:pl-12 text-left md:order-last'}`}>
        <div>
          <div className={`bg-primary-100 rounded-full py-1 px-4 inline-block ${isEven ? 'ml-auto' : 'mr-auto'}`}>
            <span className="font-medium text-primary-800">{item.time}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-serif text-primary-800">{item.title}</h3>
            <p className="text-gray-700 mt-1">{item.description}</p>
          </div>
        </div>
      </div>
      
      {/* Timeline Dot */}
      <div className="hidden md:flex md:w-0 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200 z-10"></div>
      </div>
      
      {/* Empty block for layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
};

export default Schedule;