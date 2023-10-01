import {
    desktop,
    frontend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    git,
    figma,
    starbucks,
    freelance,
    threejs,
    illustrator,
    photoshop,
    tshirtDesign,
    carShowcase,
    dalle,
    metaversus,
    hireacamp,
    framer,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: `React.js Next.js`,
        icon: desktop,
    },
    {
        title: "Three.js Framer Motion",
        icon: frontend,
    },
    {
        title: "Tailwind CSS Git",
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Framer Motion",
        icon: framer,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "photoshop",
        icon: photoshop,
    },
    {
        name: "illustrator",
        icon: illustrator,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Hire A Camp",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Feb 2023 - Jul 2023",
        points: [
            "Designed and developed the complete front-end of the website, contributing to enhanced user engagement and improved visual aesthetics.",
            "Collaborated closely with cross-functional teams to ensure seamless integration of design and functionality.",
            "Utilized React.js, Next.js, SWR, CSS, TailwindCSS, Framer Motion, and Lottie to create dynamic and responsive user interfaces.",
            "Demonstrated strong problem-solving skills and attention to detail in implementing design elements and interactive features.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Worked independently to deliver high-quality front-end solutions to various clients, meeting project requirements and exceeding expectations.",
            "Leveraged React.js, CSS, and other modern technologies to create visually appealing and user-friendly websites.",
            "Collaborated effectively with clients to understand their vision and translate it into engaging and functional web interfaces.",
        ],
    },
];

const academics = [
    {
        degree: "Masters",
        name: "M.Sc. IT",
        university: "Uttarakhand Open University",
        division: "First Division",
        location: "Haldwani"
    },
    {
        degree: "Bachelors",
        name: "B.C.A",
        university: "Kumaun University",
        division: "First Division with Honours",
        location: "Nainital"
    },
    {
        degree: "Intermediate",
        name: "10 + 2",
        university: "St. Francis School",
        division: "91%",
        location: "Tanakpur"
    },
];

const projects = [
    {
        name: "Hire A Camp",
        description:
            "An online marketplace that lets travelers to easily search, and instantly book from a wide range of outdoor stays offered on the marketplace including Hill, Beach, Jungle, Luxury, and Budget stays",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hireacamp,
        source_code_link: "https://hireacamp.com",
    },
    {
        name: "Car Showcase",
        description:
            "Web-based platform that allows users to search, and view all of the car specifications from various providers, providing a convenient and efficient solution for cars comparison.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carShowcase,
        source_code_link: "https://github.com/psychologicalname/cars-showcase",
    },
    {
        name: "T-Shirt Design",
        description:
            "Web application that enables users to design t-shirts allowing them to choose color from color picker, uploading custom designs from their device, or use AI generated designs, as well as download their self-designed t-shirt.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tshirtDesign,
        source_code_link: "https://github.com/psychologicalname/3D-Tshirt-Design",
    },
    {
        name: "DALL-E Clone",
        description:
            "A comprehensive platform that allows users to generate images from their given the prompt as well as share the generated image with the community.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: dalle,
        source_code_link: "https://github.com/psychologicalname/dall-e",
    },
    {
        name: "Metaversus",
        description:
            "A web application that lets users dive into the world of metaverse providing information about the metaverse, all animated using framer motion.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "framer",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: metaversus,
        source_code_link: "https://github.com/psychologicalname/metaversus",
    },
];

export { services, technologies, experiences, academics, projects };