import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  SolarEdge,
  barbershops
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Automation Developer",
    icon: web,
  },
  {
    title: "Embedded Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Automation Engineer Student",
    company_name: "SolarEdge",
    icon: SolarEdge,
    iconBg: "#FFFFFF",
    date: "December 2021 - July 2022",
    points: [
      "Maintained automated testing system using C#.",
      "Leaded fleet of lab test machines and integrated with CI automation",
      "Responsibility for process automations to improve day to day activities." 

    ],
  },
  {
    title: "Automation Engineer",
    company_name: "SolarEdge",
    icon: SolarEdge,
    iconBg: "#FFFFFF",
    date: "July 2022 - Feb 2024",
    points: [
      "Develop and maintain automated testing systems for embedded devices using C#, NUnit, .NET 4.7.2, .NET 6, .NET 7, Python PyUnit, Multithreading, Parallel Processing, Git, GitLab CI/CD, YAML, GitLab-Runners, Bat Scripts, PowerShell scripts, Visual Studio, JFrog, JFrog Artifactory.",
      "Built an inline website from scratch for stakeholders and implemented CI/CD processes using C#, MVC ASP.NET, CSHTML, CSS, JavaScript, SQL, Entity Framework, and SQL Server Management.",
      "Leaded a fleet of lab test machines and associated CI automation.",
      "Used Varus communication technologies such as TCP/IP, UDP, RS485, Ethernet, USR-VCOM",
      "Created a desktop application using C# forms for multiple devices to enable remote control and connectionbetween two com ports",
      "Developed a GUI using C# Forms (.NET Core) to control devices enhanced with additional features, utilizing both TCP and COM port communication protocols with Google ProtoBuf.",
      "Maintain comprehensive documentation of the testing system and provide training to junior team members",
    ],
  },
  {
    title: "Embedded Software Engineer",
    company_name: "SolarEdge",
    icon: SolarEdge,
    iconBg: "#FFFFFF",
    date: "Feb 2024 - Sep 2024",
    points: [
      "Developed and maintained various C projects, utilizing technologies such as IAR, Simplicity Studio, VS Code, STM32 M0, Atmel, EFR32, EFM32, FreeRTOS, BareMetal, Google Protocol Buffers, Modbus, RS485, UART, and SPI.",
      
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "SolarEdge",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Barber Shops",
    description:
      "Cross platform application that manages barber shops, booking, find nearest barber, best barbers",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: barbershops,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
