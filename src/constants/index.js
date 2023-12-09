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
    typescript,
    mfl,
    tcs,
    ai
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
        title: "Full Stack Developer",
        company_name: "Muthoot Fincorp One",
        icon: mfl,
        iconBg: "#accbe1",
        date: "Sep 2022 - Present",
        points: [
            "Spearheaded the development of the user-centric Digital Gold Platform, encompassing the creation of Restful APIs and a Next.js web application.",
            "Contributed to improving code review process by utilizing Chat-GPT AI capabilities through automated code-review bot using bitbucket and AWS lambda functions.",
            "Actively participated in code review and learning sessions to enhance code quality and foster continuous improvement across all MFLOne products.",
            "Collaborated with multiple development teams, making valuable contributions to deliver high-quality code and achieve project milestones.",

        ],
    },
    {
        title: "React Developer",
        company_name: "Tata Consultancy Services",
        icon: tcs,
        iconBg: "#fbc3bc",
        date: "Nov 2020 - Sep 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/siramkalyan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/siramkalyan',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Word Predictor',
        description: 'Open Source NLP Model to generate valid words in english from the given set of alphabets.',
        link: 'https://pypi.org/project/possible-english-words/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Code Review Browser Extension',
        description: 'Automated Code Review: My browser extension automates the code review process, making it faster and more efficiently utilizing the ChatGPT AI capabilities.',
        link: 'https://chromewebstore.google.com/detail/bitbucket-code-review-bot/imddakggmojhdhhakbankmmaplmlnijp?pli=1',
    }
];