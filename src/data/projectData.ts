export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

import pdcaImg from "../assets/images/pdca-1.png";
import amsImg from "../assets/images/ams-morning-act.png";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Mutayloo Project E-Commerce",
    description:
      "Utilized the MERN stack (MongoDB, Express.js, React, Node.js) for the development. Emphasized clean code practices to facilitate team collaboration and easy maintenance. Collaborated with a team of 4 developers, holding regular scrum meetings and using version control with Git to ensure smooth integration of code.",
    image: "https://via.placeholder.com/1920x1080",
    link: "https://mutayloo.com/",
  },
  {
    id: 2,
    title: "Project Performance Reporting",
    description:
      "Developed a web-based system for reporting project performance following the PDCA model. Awarded 2nd runner-up, gold medal level for software innovation and embedded systems.",
    image: pdcaImg,
    link: "http://pdca.ctnphrae.com/",
  },
  {
    id: 3,
    title: "Activity Management System",
    description:
      "Developed a web system for managing activities, allowing students to view participation percentages and submit activities. Provided teachers with tools to check attendance and review submitted activities for their students.",
    image: amsImg,
    link: "#",
  },
];

export default projectsData;
