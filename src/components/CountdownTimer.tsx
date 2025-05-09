import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '../utils';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeBlock {
  value: number;
  label: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
  
  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeRemaining(targetDate);
      setTimeRemaining(updated);
      
      if (updated.hasEnded) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const timeBlocks: TimeBlock[] = [
    { value: timeRemaining.days, label: 'Hari' },
    { value: timeRemaining.hours, label: 'Jam' },
    { value: timeRemaining.minutes, label: 'menit' },
    { value: timeRemaining.seconds, label: 'Detik' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  if (timeRemaining.hasEnded) {
    return (
      <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-6 px-8">
        <h3 className="text-white text-2xl font-serif">Our Special Day Has Arrived!</h3>
      </div>
    );
  }
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-6 px-4 sm:px-8"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-white bg-opacity-90 rounded-lg py-3 px-2 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-primary-800">
                {block.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white text-sm">{block.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;