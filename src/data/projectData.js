// Importing project images
import cvWebsiteImage from '../assets/images/cv_website.png';
import weatherImage from '../assets/images/weather.png';
import weather2Image from '../assets/images/weather2.png';
import weather2LightImage from '../assets/images/weather2_light.png';
import calculatorImage from '../assets/images/calculator.png';
import calculatorDarkImage from '../assets/images/calculator_dark.png';
import fietsateljeeBerchemImage from '../assets/images/fietsateljee_berchem.png';
import todoImage from '../assets/images/todo.png';
import studioGhibliImage from '../assets/images/studio_ghibli.png';
import studioGhibliLightImage from '../assets/images/studio_ghibli_light.png';
import potterImage from '../assets/images/potter.png';
import potterDarkImage from '../assets/images/potter_dark.png';
import dictionaryImage from '../assets/images/dictionary.png';
import dictionaryDarkImage from '../assets/images/dictionary_dark.png';


// Importing logos
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/js.png';
import reactLogo from '../assets/logos/react.png';
import bootstrapLogo from '../assets/logos/bootstrap.png';
import apiLogo from '../assets/logos/api.png';
import gitHubLogo from '../assets/logos/github.png';


export const projectData = [
    {
        name: "Online Resume",
        description: "My first ever landing page! This project marks my initial steps into the exciting world of web development, primarily using vanilla HTML and CSS with a bit of JavaScript. I learned the basics of HTML, CSS, and JavaScript while creating my very own landing page.",
        details: "So, what's the big deal about this project? Well, it's like the start of my journey in web development. It may not be the most thrilling, but you can still check out my CV and see the landing page I created! It's where I laid the foundation for all the coding adventures I've been having since then.",
        imageUrl: cvWebsiteImage,
        linkUrl: "https://chotirat.netlify.app/",
        githubUrl: 'https://github.com/jgchoti/cv',
        linkTitle: "Chotirat's Online Resume",
        shortDescription: "Built with HTML, CSS and JavaScript",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo }
        ]
    },
    {
        name: "Weather App",
        description: "In this project, I got into the world of live API to make a dynamic weather app. I aimed for a design that's user-friendly. User can get the latest on weather conditions, forecasts, and what's happening in their area, all thanks to the API integration.",
        details: "My primary focus was on integrating weather APIs to ensure users receive up-to-date and accurate weather information. This involved learning how to effectively manage data from external sources and present it in a user-friendly format within the application. By mastering API interactions, I not only enhanced my technical skills in JavaScript but also learned the importance of data integrity and real-time updates in user-facing applications. Moving forward, I plan to further refine this project by exploring additional APIs and improving the overall user experience.",
        imageUrl: weatherImage,
        linkUrl: "https://weather2023.netlify.app/",
        githubUrl: 'https://github.com/jgchoti/weather-app',
        linkTitle: "Weather App Project",
        shortDescription: "Exploring the Power of Live API Integration",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'API', logoUrl: apiLogo }
        ]
    },
    {
        name: "Weather App 2.0",
        description: "Utilizing my knowledge of HTML, CSS, and JavaScript, I embarked on building the Weather App using React. This project marked my entry into the world of React.",
        details: "Through this project, I deepened my understanding of React's core concepts, such as state, props, and components. This project reflects my growth and remind me that software development is a continuous learning process.",
        imageUrl: weather2Image,
        alternate_image: weather2LightImage,
        linkUrl: "https://weather2024.netlify.app/",
        githubUrl: 'https://github.com/jgchoti/weather-react',
        linkTitle: "Weather App Project create with React",
        shortDescription: " Built with HTML, CSS with React",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'React', logoUrl: reactLogo },
            { name: 'API', logoUrl: apiLogo }
        ]
    },
    {
        name: "Basic Calculator",
        description: "When I started my journey with HackYourFuture Belgium, I was tasked to created a Basic Calculator. Developed to enhance my web development skills, this calculator is crafted using HTML, CSS, and basic JavaScript.",
        details: "My goal of this project was to create simple, clean and minimalistic design, making calculations straightforward and efficient. Creating this app meant diving into various functionalities with HTML, CSS, and JavaScript. It was a fun and rewarding challenge that highlights the basics of web development.",
        imageUrl: calculatorImage,
        alternate_image: calculatorDarkImage,
        linkUrl: "https://choti-calculator.netlify.app/",
        githubUrl: "https://github.com/jgchoti/basic-calculator",
        linkTitle: "Basic Calculator",
        shortDescription: "Built with HTML, CSS and basic JavaScript",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
        ]
    },
    {
        name: "Bike Shop Website",
        description: "I made a website for a local Bike Repair Shop. I used HTML, CSS, JavaScript, and Bootstrap to make this site user-friendly and responsive.",
        details: "The goal is to make this site looks great on different devices, and to help the shop connect with customers in a digital world.This project.",
        imageUrl: fietsateljeeBerchemImage,
        linkUrl: "https://fietsateljee-berchem.netlify.app/",
        githubUrl: "https://github.com/jgchoti/fietsateljee-berchem",
        linkTitle: "Bike Shop Website",
        shortDescription: "A responsive website, built with HTML, CSS, and JavaScript.",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'Bootstrap', logoUrl: bootstrapLogo }
        ]
    },
    {
        name: "To-Do List",
        description: "This to-do list application was developed as part of my studies with HackYourFuture Belgium, aimed at deepening my understanding of JavaScript.",
        details: "Throughout this project, I aimed to create a user-friendly application where individuals could effortlessly manage their daily tasks. I also implemented local storage capabilities, allowing users to save their to-do lists directly on their devices. This project has not only strengthened my technical skills in JavaScript, particularly in event handling and DOM manipulation, but also taught me the importance of user-centric design.",
        imageUrl: todoImage,
        linkUrl: "https://jgchoti.github.io/to-do-list/",
        githubUrl: "https://github.com/jgchoti/to-do-list",
        linkTitle: "To-Do List Application",
        shortDescription: "A responsive To-Do List, built with HTML, CSS, and JavaScript.",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
        ]
    }, {
        name: "Studio Ghibli Searcher",
        description: "The Studio Ghibli Searcher is an application born out of my deep admiration for Studio Ghibli films and characters. It is designed to let users discover the world of Studio Ghibli by using the Studio Ghibli API.",
        details: "This application was a passion project developed during my studies at HackYourFuture Belgium. One of the highlights of this project was implementing client-side filtering using state management. This feature enables users to refine search results directly.",
        imageUrl: studioGhibliImage,
        alternate_image: studioGhibliLightImage,
        linkUrl: "https://jgchoti.github.io/studio-ghibli-searcher/",
        githubUrl: "https://github.com/jgchoti/studio-ghibli-searcher/",
        linkTitle: "Studio Ghibli Searcher Application",
        shortDescription: "A responsive application using the Studio Ghibli API",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'API', logoUrl: apiLogo }
        ]
    }, {
        name: "Potter Searcher",
        description: "The PotterAPI Searcher is an application developed as part of an assignment during my studies at HackYourFuture Belgium to deepen my understanding of JavaScript and API interactions.",
        details: "It utilizes The Potter DB: API and allow users to explore and discover information about characters, spells, potions, books, and movies. This project served as an opportunity for me to learn about making API calls and managing queries to retrieve specific data from The Potter DB: API. One of the key challenges I tackled was implementing server-side filtering to optimize performance and ensure accurate data retrieval.",
        imageUrl: potterImage,
        alternate_image: potterDarkImage,
        linkUrl: "https://jgchoti.github.io/harry-potter-searcher/",
        githubUrl: "https://github.com/jgchoti/harry-potter-searcher",
        linkTitle: "Potter Searcher Application",
        shortDescription: "A responsive application using The Potter DB: API",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'API', logoUrl: apiLogo }
        ]
    },
    {
        name: "English Dictionary",
        description: "This English Dictionary project was developed using React. Using Free Dictionary API, user can look up meaning of any word.",
        details: "Beyond just looking up meanings, users can also get random words thrown their way, making their learning journey exciting and engaging.",
        imageUrl: dictionaryDarkImage,
        alternate_image: dictionaryImage,
        linkUrl: "https://retro-english-dictionary.netlify.app/",
        githubUrl: "https://github.com/jgchoti/dictionary-react",
        linkTitle: "English Dictionary Project create with React",
        shortDescription: " Built with HTML, CSS with React",
        technologies: [
            { name: 'HTML', logoUrl: htmlLogo },
            { name: 'CSS', logoUrl: cssLogo },
            { name: 'JavaScript', logoUrl: jsLogo },
            { name: 'GitHub', logoUrl: gitHubLogo },
            { name: 'React', logoUrl: reactLogo },
            { name: 'API', logoUrl: apiLogo }
        ]
    }]