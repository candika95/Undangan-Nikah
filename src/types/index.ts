export interface EventDetails {
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
    coordinates: [number, number];
  };
}

export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  description: string;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  attending: boolean;
  timestamp: string;
}

export interface PhotoItem {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface AudioPlayerProps {
  audioSrc: string;
  initialVolume?: number;
}