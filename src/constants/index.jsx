import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import UICLogo from "../assets/UIC Logo-2.jpg";
import PDEULogo from "../assets/PDEU Logo.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiR } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Bio", href: "/bio" },
  { label: "Skills", href: "/skills" },
  { label: "Work Experience", href: "/work" },
  { label: "Education", href: "/education" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const HERO = {
  name: "Jay Shah",
  greet: "Hello there! 👋🏻",
  description:
    "I’m a passionate Computer Science student aspiring to become a Full-Stack Developer. With a strong foundation in programming and a keen interest in both front-end and back-end development, I am eager to build dynamic and impactful digital solutions. I am currently expanding my skills in full-stack technologies and look forward to creating seamless, user-friendly applications that solve real-world challenges.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/jay2762/Personal-Portfolio",
  },
  {
    id: 2,
    name: "AirMap",
    description:
      "Built a JavaFX application for real-time environmental monitoring, integrating Arduino sensors to measure air quality, temperature, and humidity, with a dynamic heatmap and user-friendly interface.",
    image: projectImage2,
    githubLink: "https://github.com/jay2762/Air-Map",
  },
  {
    id: 3,
    name: "Kanban Board",
    description:
      "Developed a responsive Kanban board using React, TypeScript, and TailwindCSS for task management with an intuitive user interface for efficient workflow tracking.",
    image: projectImage3,
    githubLink: "https://github.com/jay2762/Kanban-Board",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with JavaScript, HTML and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/jay2762/Weather-App",
  },
  {
    id: 5,
    name: "Tasty Treasure",
    description:
      "Developed a recipe recommendation web application using NLP and collaborative filtering to suggest personalized recipes based on user-input ingredients and cooking time, built with Flask, HTML, and CSS.",
    image: projectImage5,
    githubLink: "https://github.com/jay2762/Tasty-Treasure",
  },
  {
    id: 6,
    name: "Sunday Morning Club",
    description:
      "Created a vibrant React-based platform for Chicago's Sunday Morning Club, showcasing events and activities, fostering connections, and enabling socializing through games and friendships.",
    image: projectImage6,
    githubLink: "https://smclub.vercel.app/",
  },
];

export const BIO = [
  "I am a computer science graduate student at the University of Illinois Chicago, where I am pursuing my Master’s degree in Computer Science (2024–2026). Before this, I earned my Bachelor of Technology in Information and Communication Technology from Pandit Deendayal Energy University, graduating with distinction in 2024.",
  "As a full-stack software engineer intern at Futurrizon Technologies, I developed a strong foundation in software development. Using Microsoft Power Apps and Microsoft Power BI, I created unique applications and dashboards for user interaction and continuous visualization. On the backend, I automated tasks with Microsoft Power Automate, worked with Azure Data Lake and Microsoft SQL Server for data solutions, and used Python and Azure to improve client systems.",
  "I'm passionate about technology and the endless opportunities it brings to learn, create and grow. Excited for what's next!!",
];

export const SKILLS = [
  {
    icon: <SiCplusplus className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C++",
  },
  {
    icon: <SiPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "SQL",
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-500 lg:text-5xl" />,
    name: "Express.js",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiR className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "R Programming",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company: "Futurrizon Technologies PVT. LTD.",
    duration: "February 2024 - June 2024",
    description:
      "As a Full-Stack Software Engineer Intern at Futurrizon Technologies, I developed applications, dashboards, and automated systems using Microsoft Power Platform, Azure, Python, and SQL Server.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Illinois at Chicago",
    duration: "August 2024 - May 2026",
    logo: UICLogo,
    CGPA: "GPA: 4.0",
  },
  {
    degree:
      "Bachelor of Technology in Information and Communication Technology",
    institution: "Pandit Deendayal Energy University",
    duration: "September 2020 - May 2024",
    logo: PDEULogo,
    CGPA: "GPA: 3.74",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/jay2762",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/jay-shah-83a8a8216/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
