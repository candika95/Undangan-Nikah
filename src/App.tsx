import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import { BACKGROUND_MUSIC_URL } from './constants';

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const audioPlayer = AudioPlayer({ audioSrc: BACKGROUND_MUSIC_URL });
  
  useEffect(() => {
    // Mark page as loaded after a short delay
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Update page title
    document.title = 'Haryo & Riyana - Wedding Invitation';
  }, []);
  
  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header 
        isMusicPlaying={audioPlayer.isPlaying} 
        toggleMusic={audioPlayer.togglePlay} 
      />
      <main>
        <Hero />
        {/* <OurStory /> */}
        <EventDetails />
        <Schedule />
        <Gallery />
        {/* <Guestbook /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;