import { EventDetails, ScheduleItem, PhotoItem, TimelineItem } from '../types';

export const COUPLE_NAMES = {
  bride: 'Riyana',
  groom: 'Haryo'
};

export const WEDDING_DATE = '2025-06-12T10:00:00.000Z';

export const EVENT_DETAILS: EventDetails = {
  date: 'Kamis, 12 juni 2025',
  time: '10:00 PM',
  location: {
    name: 'RT 02 RW 01 Cupuwatu II',
    address: 'Kalasan Sleman',
    city: 'Yogyakarta',
    coordinates: [-7.772871, 110.455051],
  }
};
// -7.772871, 110.455051
export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 1,
    time: '10:00',
    title: 'Kedatangan Tamu',
    description: 'Tamu mulai berdatangan dan disambut dengan minuman ringan.'
  },
  {
    id: 2,
    time: '10:30',
    title: 'Akad Nikah',
    description: 'Prosesi ijab kabul dan tukar cincin berlangsung dengan khidmat.'
  },
  {
    id: 3,
    time: '11:30',
    title: 'Sesi Foto Keluarga',
    description: 'Pengantin berfoto bersama keluarga inti dan kerabat dekat.'
  },
  {
    id: 4,
    time: '12:00',
    title: 'Resepsi & Makan Siang',
    description: 'Tamu dipersilakan menikmati hidangan yang telah disediakan.'
  },
  {
    id: 5,
    time: '13:30',
    title: 'Tarian Pembuka',
    description: 'Pengantin memulai suasana meriah dengan tarian pertama.'
  },
  {
    id: 6,
    time: '14:00',
    title: 'Pemotongan Kue',
    description: 'Momen manis pemotongan kue oleh kedua mempelai.'
  },
  {
    id: 7,
    time: '14:30',
    title: 'Ucapan & Doa',
    description: 'Keluarga dan sahabat memberikan ucapan serta doa terbaik.'
  },
  {
    id: 8,
    time: '15:00',
    title: 'Penutupan Acara',
    description: 'Acara ditutup dengan pelepasan balon dan ucapan terima kasih.'
  }
];


export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3650423/pexels-photo-3650423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 4,
    height: 3,
    alt: 'Couple by the ocean'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 3,
    height: 4,
    alt: 'Couple walking hand in hand'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 4,
    height: 3,
    alt: 'Couple silhouette at sunset'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 3,
    height: 4,
    alt: 'Couple embracing outdoors'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1247741/pexels-photo-1247741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 4,
    height: 3,
    alt: 'Couple laughing together'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    width: 3,
    height: 4,
    alt: 'Couple in formal attire'
  }
];

export const LOVE_STORY: TimelineItem[] = [
  {
    id: 1,
    date: 'Juni 2012',
    title: 'Pertemuan Pertama',
    description: 'Kami pertama kali bertemu saat duduk di bangku SMP. Dari hanya saling sapa di koridor sekolah, perlahan tumbuh rasa yang lebih dari sekadar teman sebangku.',
    image: 'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    date: 'September 2019',
    title: 'Kencan Pertama',
    description: 'Kencan pertama kami berlangsung di Candi Prambanan. Kami menikmati senja di antara megahnya sejarah dan kisah cinta abadi yang tertulis di batu.',
    image: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    date: 'Maret 2020',
    title: 'Nonton Konser Bersama',
    description: 'Kami menonton konser band favorit di Yogyakarta. Lagu-lagu yang dibawakan malam itu menjadi soundtrack perjalanan cinta kami hingga hari ini.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    date: 'Agustus 2021',
    title: 'Wisuda Bersama',
    description: 'Setelah melewati masa kuliah yang penuh tantangan, akhirnya kami wisuda bersama. Momen itu menjadi simbol perjuangan dan dukungan satu sama lain.',
    image: 'https://i.imghippo.com/files/zOYE3695ZI.png'
  },
  {
    id: 5,
    date: 'Desember 2023',
    title: 'Lamaran',
    description: 'Haryo melamar di Tugu Jogja saat malam hari, ditemani gemerlap lampu kota dan suasana romantis khas Yogyakarta. Riyana pun berkata, "Ya!"',
    image: 'https://i.imghippo.com/files/RQvl7791BnM.jpg'
  }
];



export const BACKGROUND_MUSIC_URL = '/Beautiful-in-white.mp3';