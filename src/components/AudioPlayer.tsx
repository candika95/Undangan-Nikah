import { useState, useEffect, useRef } from 'react';
import { AudioPlayerProps } from '../types';

const AudioPlayer = ({ audioSrc, initialVolume = 0.3 }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = initialVolume;
    audioRef.current = audio;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, initialVolume]);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          // Handle autoplay restrictions
          console.error('Audio playback failed:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return {
    isPlaying,
    togglePlay
  };
};

export default AudioPlayer;