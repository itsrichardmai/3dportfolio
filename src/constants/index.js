import { fivericon, upennlogo, jomonlogo, dubalogo } from "../assets/images";
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
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
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
    }
];

export const experiences = [
    {
        title: "React.js Developer && Front Of House Manager",
        company_name: "Jomon Japanese BBQ",
        icon: jomonlogo,
        iconBg: "#111111",
        date: "October 2022 - November 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Embedding Yelp reviews and reservations using Yelp.com",
            "Collaborating with cross-functional teams including designers, advertisers, and social media marketers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Duba/Dubu/Cafe Clover",
        icon: dubalogo,
        iconBg: "#111111",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Managed social media marketing, search engine optimization, UI/UX design and online QR menu coding"
        ],
    },
    {
        title: "Web Developer",
        company_name: "University of Pennsylvania's ",
        icon: upennlogo,
        iconBg: "#000080",
        date: "Jan 2018 - July 2018",
        points: [
            "Completed six-month rigorous bootcamp training for HTML,CSS and JavasCript",
            "Obtained coding boot camp certification from LPS Trilogy & University of Pennsylvania",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Practiced workflow and agile methodologies such as SCRUM with student developers",
            "Tutored and taught developers best coding and UI/UX practices"
        ],
    },
    {
        title: "Freelance Full stack Developer",
        company_name: "Fiverr",
        icon: fivericon,
        iconBg: "#FFFFFF",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Full Stack solo developer assuming all responsibilities from marketing to discussing project details pre-build with clients to build and deployment of website"
        ],
    },
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
        link: 'https://github.com/itsrichardmai',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/richard-mai-478033174/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Duba Karaoke Pub',
        description: 'Developed a MERN stack web-application for the business Duba Karaoke & Pub (based in Philadelhpia) where users are able to post and reserve karaoke rooms based on available dates! Deployed embed live Yelp reviews directly from Yelp.com using Elfsight widget',
        link: 'https://itsrichardmai.github.io/DubaKaraokePub/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Marketing Single Page Application',
        description: 'Created a landing page SPA template for marketing using React. Practicing modern and beautiful UI/UX design',
        link: 'https://itsrichardmai.github.io/marketingSPA/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Authentication Application',
        description: 'Developed a full-stack application with fully functioning register, login, forgot password and authentication',
        link: 'https://itsrichardmai.github.io/authenticationapp/#/login',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Jomon Japanese BBQ',
        description: 'Built a fully responsive and modernized web application for Jomon Japanese BBQ company. Managed social media and SEO for website',
        link: 'https://www.jomonbbq.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'React Blog Application',
        description: 'Developed and deployed a fully functional React Blog application that allows users to register, login and post and delete posts.',
        link: 'https://github.com/itsrichardmai/reactblogApp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Previous Portfolio',
        description: 'First ever React application built utilizing modern UI/UX best practices for showcasing projects.',
        link: 'https://itsrichardmai.github.io/myportfolio/',
    }
];