import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GuestbookEntry } from '../types';
import { formatTimeAgo } from '../utils';

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState(true);
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Alex Rodriguez',
      message: 'Congratulations to both of you! Can\'t wait to celebrate your special day!',
      attending: true,
      timestamp: '2024-10-15T14:22:00Z'
    },
    {
      id: 2,
      name: 'Emma Johnson',
      message: 'So happy for you two! Looking forward to the big day!',
      attending: true,
      timestamp: '2024-10-10T09:15:00Z'
    }
  ]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) return;
    
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name,
      message,
      attending,
      timestamp: new Date().toISOString()
    };
    
    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
    setAttending(true);
  };
  
  return (
    <section id="guestbook" className="py-20 bg-white">
      <div className="section-container">
        <div className="section-title">
          <h2>RSVP & Guestbook</h2>
          <p>Let us know you'll be there and leave a message</p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {/* RSVP Form */}
          <div className="bg-primary-50 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif text-primary-800 mb-6">Send Your RSVP</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="attending"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="attending" className="ml-2 block text-sm text-gray-700">
                    I will attend the wedding
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send RSVP
              </button>
            </form>
          </div>
          
          {/* Guestbook Messages */}
          <div>
            <h3 className="text-2xl font-serif text-primary-800 mb-6">Guestbook Messages</h3>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {entries.map((entry) => (
                <div key={entry.id} className="bg-white rounded-lg shadow p-4 border-l-4 border-primary-400">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-lg">{entry.name}</h4>
                    <span className="text-xs text-gray-500">{formatTimeAgo(entry.timestamp)}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{entry.message}</p>
                  <div className="mt-2">
                    <span className={`text-sm px-2 py-1 rounded-full ${entry.attending ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {entry.attending ? 'Attending' : 'Not attending'}
                    </span>
                  </div>
                </div>
              ))}
              
              {entries.length === 0 && (
                <p className="text-gray-500 italic">No messages yet. Be the first to leave one!</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;