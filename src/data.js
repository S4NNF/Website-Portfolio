import video from "./assets/background.mp4";
import poto from "./assets/Website Pembelajaran.png"
// ====== GANTI DATA INI DENGAN DATA KAMU ======
export const profile = {
  name: "Ihsan Maulidi",
  headline: "Mahasiswa Teknik Informatika",
  tagline: "this is all about me",
  video : video,          
  bio: "Informatics Engineering Student",
  info: [
    { label: "Kampus", value: "Politeknik Elektronika Negeri Surabaya" },
    { label: "Domisili", value: "Pontianak" },
    { label: "Tools", value: "Figma, Canva, Capcut, Microsoft Office, Vs Code, GitHub" },
    { label: "Programming Language", value: "PHP, JavaScript, Python, C, C++" },
  ],
  email: "ihsaninformatika69@gmail.com",
  whatsapp: "628123456789",   // format internasional tanpa +
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/ihsnmldi?stkn=MTNzMml1ZXM1bW1jYQ==" },
    { label: "LinkedIn", url: "https://linkedin.com/in/ihsan-maulidi-740bb2405" },
    { label: "GitHub", url: "https://github.com/S4NNF" },
  ],
};

export const projects = [
  { title: "Website SIAKAD", desc: "Front-End Website SIAKAD", tech: ["React", "Bootstrap"], link: "#", image: poto },
  { title: "Judul Projek 2", desc: "Deskripsi singkat projek kedua.", tech: ["PHP", "MySQL"], link: "#" },
  { title: "Judul Projek 3", desc: "Deskripsi singkat projek ketiga.", tech: ["Node.js"], link: "#" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];