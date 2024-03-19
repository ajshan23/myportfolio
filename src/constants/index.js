import {
    mobile,
    backend,

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
   
    starbucks,
    tesla,
    shopify,
    carrent,

    
    threejs,
    tokyo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech enthusiastic",
      icon: web,
    },
    // {
    //   title: " Job less ",
    //   icon: meta,
    // },
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
   
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "savio hss,devagiri",
      icon: starbucks,
      iconBg: "#383E56",
      date: "june 2013 - march 2018",
      points: [

        
      ],
    },
    {
      title: "Higher Secondary ",
      company_name: "Rahmania HSS",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "june 2018 - march 2020",
      points: [
        ],
    },
    {
      title: "Under Graduation",
      company_name: "MAMO MUKKAM",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
       ],
    },
   
  ];
  

  
  const projects = [
    {
      name: "Evee GPT",
      description:
        "Web-based platform that allows users to interact with new google gemini api ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ajshan23/EveeGPT2.0.git",
      link:"https://eveegpt3.netlify.app/"
    },
    {
      name: "Tokyo Traverse",
      description:
        "E cmmerce app,where anime enthusiastics find their dream products .From collectibles to apparel,immerse yourself ,in a world where anime passion meets seamless shopping",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: tokyo,
      source_code_link: "https://github.com/ajshan23/tokyotraverse.git",
      link:"https://tokyo-traverse.onrender.com/"
    },
    
    
  ];
  
  export { services, technologies, experiences, projects };