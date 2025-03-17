import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

import resume from "../assets/resume.pdf"

import django from "../assets/django.svg";
import flask from "../assets/flask.svg";
import fastapi from "../assets/fastapi.svg";
import python from "../assets/python.svg";
import c_programming from "../assets/c_programming.svg";
import c_plus_plus from "../assets/c_plus_plus.svg";
import aws from "../assets/aws.svg";
import mysql from "../assets/mysql.svg";
import postgres from "../assets/postgres.svg";



export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#techstack", label: "Tech Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#photography", label: "Photography" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Ankith, a Software Development Engineer (Backend) seeking a Job to work alongside other engineers to hone engineering skills.",
  description:
    "I work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.",
  resumeLinkText: "Download Resume",
  resumeLink: {resume},
};

export const PHOTOS = [
  {
    description: "Photo #1",
    image: photo1,
    link: "enter-drive-link",
  },
  {
    description: "Photo #2",
    image: photo2,
    link: "enter-drive-link",
  },
  {
    description: "Photo #3",
    image: photo3,
    link: "enter-drive-link",
  },
];

export const SKILL_ITEM = [
  {
    src: `${django}`,
    content: "Django",
    id: 1,
    link:"https://github.com/AnkithRBelavadi",
  },
  {
    src: `${flask}`,
    content: "Flask",
    id: 2,
    link:"https://github.com/AnkithRBelavadi",
  },
  {
    src: `${fastapi}`,
    content: "FastAPI",
    id: 3,
    link:"https://docs.google.com/document/d/1zmMv0J8ggK95nki3k74YOOxJYjpXruywDQry427XunA/edit?tab=t.0#heading=h.ybnllkz4tdir",
  },
  {
    src: `${python}`,
    content: "Python",
    id: 4,
    link: "https://github.com/AnkithRBelavadi",
  },
  {
    src: `${c_programming}`,
    content: "C",
    id: 5,
    link: "https://github.com/AnkithRBelavadi",
  },
  {
    src: `${c_plus_plus}`,
    content: "C++",
    id: 6,
    link: "https://github.com/AnkithRBelavadi",
  },
  {
    src: `${aws}`,
    content: "AWS",
    id: 7,
    link: "https://github.com/AnkithRBelavadi",
  },
  {
    src: `${mysql}`,
    content: "MySQL",
    id: 8,
    link: "https://github.com/AnkithRBelavadi",
  },
  {
    src:`${postgres}`,
    content: "Postgres",
    id: 9,
    link: "https://github.com/AnkithRBelavadi",
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Aug 2023 — Present",
    title: "Software Development Engineer at XTEN NETWORKS ",
    location: "Bengaluru, Karnataka",
    description: [
      "Currently Developing APIs for SAAS CTI Downloader.",
      "Designed architecture for SAAS CTI Downloader on AWS.",
      "Created backend architecture and flow of SAAS.",
      "Collaborated on the development of Central Management System (CMS) for [Xten-Cyberguard].",
      "Leveraging Python to enhance functionality of the central management system.",
      "Developed programs using C and DPDK for optimized DNS packet query extraction.",
      "Designed Cloud AWS architecture for Central Management System (CMS).",
      "Participated in code reviews, debugging, and troubleshooting.",
      "Enhanced systems by integrating new features and optimizing code.", 
    ],
  },
  {
    yearRange: "Mar 2023 — Jul 2023",
    title: "SDE Intern at XTEN NETWORKS",
    location: "Bengaluru, Karnataka",
    description: [],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "ankithrbelavadi@gmail.com",
  socialLinks: [
    // {
    //   platform: "Twitter",
    //   url: "#",
    //   ariaLabel: "Follow me on Twitter",
    //   icon: "RiTwitterXFill",
    // },
    {
      platform: "GitHub",
      url: "https://github.com/AnkithRBelavadi",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ankith-r-belavadi-a005142ba/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Ankith R Belavadi. All rights reserved.`,
};
