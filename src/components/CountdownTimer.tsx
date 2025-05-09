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
    <div className="flex flex-nowrap justify-center gap-2 overflow-x-auto">
  {timeBlocks.map((block, index) => (
    <motion.div
      key={block.label}
      variants={itemVariants}
      className="text-center"
    >
      <div className="bg-white bg-opacity-90 rounded-lg py-2 px-2 mb-2 w-16 sm:w-20">
        <span className="text-2xl sm:text-3xl font-semibold text-primary-800">
          {block.value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white text-sm">{block.label}</span>
    </motion.div>
  ))}
</div>


  );
};

export default CountdownTimer;