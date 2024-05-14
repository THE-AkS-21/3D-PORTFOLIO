import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    /*
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    */
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    /*
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },*/
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    /*
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }*/
];

export const experiences = [
    {
        title: "Freelance Data Entry Project",
        company_name: "Collaborative Team Member",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Collaborated in a two-member team to create a comprehensive data entry system for a specialized firm, tracking daily transactions, incoming raw materials, and outbound supplies.",
            "Engineered a streamlined solution, resulting in a substantial 12% revenue increase via optimized warehousing and transportation strategies.",
    
        ],
    },
    {
        title: "Data Analyst Intern",
        company_name: "Urban Company",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Mar 2024 - May 2024",
        points: [
            "Conducted analysis on datasets containing over 100,000 records using SQL, Python, and Excel, resulting in a 20% improvement in data accuracy.",
            "Utilized advanced statistical techniques to analyze customer behavior, leading to a 25% increase in customer retention rates through targeted marketing campaigns.",
            "Implemented data cleaning procedures that reduced data errors by 30% and improved data consistency, resulting in more reliable analysis outcomes.",
        ],
    },
    // {
    //     title: " ",
    //     company_name: " ",
    //     icon: ,
    //     iconBg: "#b7e4c7",
    //     date: " ",
    //     points: [ ],
    // },
    // {
    //     title: " ",
    //     company_name: " ",
    //     icon: ,
    //     iconBg: "#a2d2ff",
    //     date: " ",
    //     points: [ ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/THE-AkS-21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ankit-kr-singh-535341203/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MERN E SHOP',
        description:  'Executed robust role-based authentication, email verification, and authorization enhancements for heightened security. Seamlessly integrated Razorpay, optimizing payment processing and elevation of user experience. Innovated product filtering by category, and streamlined price sorting enabling 200 queries/second handling. Tech Stack Used: MERN (MongoDB, Express.js, React, Node.js), Material Ul, Bootstrap, Cloudinary.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'PORTFOLIO',
        description: 'Engineered a versatile portfolio template, providing a customizable foundation for crafting visually captivating and interactive portfolios. Integrated animations and transitions to create a visually appealing user experience, highlighting key information and projects effectively. Tech Stack Used: React.JS, Bootstrap.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'STUDENT ERP PORTAL',
        description: 'Provided secure access for students to view academic records such as marks and personal details. Implemented a user-friendly interface for teachers to update marks and attendance records efficiently. Facilitated streamlined communication and data management within the educational institution. Tech Stack Used: MERN (MongoDB, Express.js, React, Node.js)',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: ' ',
    //     description: ' ',
    //     link: ' ',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: ' ',
    //     description: ' ',
    //     link: ' ',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: ' ',
    //     description: ' ',
    //     link: ' ',
    // }
];