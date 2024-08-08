import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker} from 'react-icons/fa';
import {SiJquery, SiTailwindcss,SiNextdotjs, SiCplusplus } from 'react-icons/si';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];


export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node Js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Node.js, creating robust and scalable server-side applications with a focus on performance and security.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in MongoDB, managing and structuring data efficiently to support high-performance applications.',
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <FaAws className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in AWS, leveraging cloud services for scalable, reliable, and cost-effective application deployment.',
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
    text: 'Expert in Docker, ensuring consistent and reliable environments for development, testing, and deployment.',
  },
  {
    id: nanoid(),
    title: 'JQuery',
    icon: <SiJquery className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in jQuery, enhancing web applications with dynamic and interactive features.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Tailwind CSS, designing highly customizable and responsive user interfaces.',
  },
  {
    id: nanoid(),
    title: 'Next JS',
    icon: <SiNextdotjs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Next.js, building efficient and scalable server-side rendered React applications.',
  },
];
export const projects = [
  {
    id: nanoid(),
    img: 'https://graphmyhealth.com/images/logo/logo.png',
    url: 'https://graphmyhealth.com/',
    github: 'https://github.com/john-smilga',
    title: 'Graph my Health',
    text: 'Graph My Health (GMH) is a web application(Available on ios and Android  also) designed to help users monitor and visualize their health metrics. Leveraging modern web technologies, GMH provides an intuitive and interactive interface for tracking health data over time.',
  },
  {
    id: nanoid(),
    img: 'https://www.xinthesys.com/wp-content/uploads/2019/06/ui-compliance.png',
    title: 'Adept Web UI',
    text: 'Created a tailored web UI solution for US stock market clients, granting instant access to real-time FIX messages, optimizing data management and communication. Employing modern tech stacks and intuitive design, clients seamlessly navigate and engage with their transaction data.',
  },
  {
    id: nanoid(),
    img: 'https://turbo360.com/wp-content/uploads/2017/05/Scheduling-using-Azure-Scheduler.jpg',
    title: 'The Scheduler Service ',
    text: 'Creation of "Job-Scheduler application which allows users to schedule maintain and monitor cron-jobs. Clients can schedule jobs for various tasks at various stages of Finacial data processing according to requirements Job-Scheduler is a clustur of services which manages maintaining schedules, executing jobs capturing logs, notifying users, etc. Job-Scheduler makes use of Cron-jobs, ',
  },
];
