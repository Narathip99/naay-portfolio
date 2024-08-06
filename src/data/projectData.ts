export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

import mutaylooImg from "../assets/images/mutayloo.png";
import pdcaImg from "../assets/images/pdca.png";
import amsImg from "../assets/images/ams-morning-act.png";
import realEstate from "../assets/images/rems.png";
import aniblyat from "../assets/images/aniblyat.png";
import aiChat from "../assets/images/ai-chat.png";
import notesApp from "../assets/images/notes.png";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Mutayloo Project E-Commerce",
    description:
      "The Mutayloo project was inspired by the trend among Thais to seek spiritual items for daily use, leading us to create practical, everyday jewelry. Utilizing the MERN stack, our team followed Agile and Scrum methodologies, starting from user stories and use cases to UI and database design, coding, and testing. The project demanded high levels of teamwork and soft skills, as we had to learn and implement tasks simultaneously under time constraints. Additionally, with the reduction of one team member, we had to rely more on time management and communication skills to complete the work effectively.D",
    image: mutaylooImg,
    link: "https://github.com/jsd7-9qboil/mutayloo",
  },
  {
    id: 2,
    title: "Project Performance Reporting",
    description:
      "Designed and developed a web-based system using PHP CodeIgniter to simplify the storage and evaluation of project performance, transitioning from paper-based methods to a web-based system using the PDCA model. This project secured the 2nd runner-up, gold medal level for software innovation and embedded systems.",
    image: pdcaImg,
    link: "http://pdca.ctnphrae.com/",
  },
  {
    id: 3,
    title: "Activity Management System",
    description:
      "Developed a web system for managing activities, allowing students to view participation percentages and submit activities. Provided teachers with tools to check attendance and review submitted activities for their students.",
    image: amsImg,
    link: "",
  },
  {
    id: 4,
    title: "Real Estate Management System",
    description:
      "Developed to serve as a central platform for agents and real estate customers, allowing agents to register, sell, and rent properties, while customers can browse and contact agents directly through the system. Built with WordPress using Elementor, and customized plugins for managing agents and posting properties for sale or rent.",
    image: realEstate,
    link: "#",
  },
  {
    id: 5,
    title: "Anime Info",
    description:
      "Developed a website that provides detailed information about anime for the current season, including airing schedules with countdowns to the next episode. Users can view which anime are airing this season and what's coming up in the next season. By clicking on more details, users can see additional information about each anime. The data is fetched from the AniList API using GraphQL to manage the API requests.",
    image: aniblyat,
    link: "https://github.com/Narathip99/aniblyat",
  },
  {
    id: 6,
    title: "AI Based Chatbot",
    description:
      "Developed a chatbot application to explore and study the use of the Gemini API. This project demonstrates the integration of AI capabilities in creating a responsive chat interface, capable of handling various queries and providing interactive responses.",
    image: aiChat,
    link: "https://github.com/Narathip99/chat-with-ai",
  },
  {
    id: 7,
    title: "Notes App",
    description:
      "This Notes App project is built using the MERN Stack for learning purposes. It features account creation, login, adding, editing, deleting, pinning, and searching notes. The tech stack includes MongoDB for database management, Express.js for the backend server and API, React for the frontend UI, and Node.js for running server-side JavaScript.",
    image: notesApp,
    link: "https://github.com/Narathip99/notes-app-mern",
  },
];

export default projectsData;
