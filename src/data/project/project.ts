import { Project } from "../../types/types";

const BokaMoteStart = require("../../assets/images/projects/boka-mote/boka-mote-start.png");
const BokaMoteUI1 = require("../../assets/images/projects/boka-mote/boka-mote-ui-1.png");
const BokaMoteUI2 = require("../../assets/images/projects/boka-mote/boka-mote-ui-2.png");
const BokaMoteUI3 = require("../../assets/images/projects/boka-mote/boka-mote-ui-3.png");

const DesignServiceStart = require("../../assets/images/projects/design-service/design-service-start.png");
const DesignServiceUI1 = require("../../assets/images/projects/design-service/design-service-ui-1.png");
const DesignServiceUI2 = require("../../assets/images/projects/design-service/design-service-ui-2.png");
const DesignServiceUI3 = require("../../assets/images/projects/design-service/design-service-ui-3.png");

const HundSokerHemStart = require("../../assets/images/projects/hund-soker-hem/hund-soker-hem.png");
const HundSokerHemUI1 = require("../../assets/images/projects/hund-soker-hem/hund-soker-hem-ui-1.png");
const HundSokerHemUI2 = require("../../assets/images/projects/hund-soker-hem/hund-soker-hem-ui-2.png");
const HundSokerHemUI3 = require("../../assets/images/projects/hund-soker-hem/hund-soker-hem-ui-3.png");

const TVMazeStart = require("../../assets/images/projects/tv-maze/tv-maze-start.png");
const TVMazeUI1 = require("../../assets/images/projects/tv-maze/tv-maze-ui-1.png");
const TVMazeUI2 = require("../../assets/images/projects/tv-maze/tv-maze-ui-2.png");
const TVMazeUI3 = require("../../assets/images/projects/tv-maze/tv-maze-ui-3.png");

const DogFriendlyStart = require("../../assets/images/projects/dog-friendly/dog-friendly-start.png");
const DogFriendlyUI1 = require("../../assets/images/projects/dog-friendly/ui-1.png");
const DogFriendlyUserFlow = require("../../assets/images/projects/dog-friendly/user-flow.png");
const DogFriendlyCompetitiveAnalysis = require("../../assets/images/projects/dog-friendly/competitive-analysis.png");
const DogFriendlyPersonas = require("../../assets/images/projects/dog-friendly/personas.png");
const DogFriendlyLowFid1 = require("../../assets/images/projects/dog-friendly/low-fid-1.png");
const DogFriendlyLowFid2 = require("../../assets/images/projects/dog-friendly/low-fid-2.png");
const DogFriendlyLowFid3 = require("../../assets/images/projects/dog-friendly/low-fid-3.png");
const DogFriendlyLowFid4 = require("../../assets/images/projects/dog-friendly/low-fid-4.png");

const CalendarStart = require("../../assets/images/projects/calendar/calendar-start.png");
const CalendarLowFid1 = require("../../assets/images/projects/calendar/low-fid-1.png");
const CalendarLowFid2 = require("../../assets/images/projects/calendar/low-fid-2.png");
const CalendarUI1 = require("../../assets/images/projects/calendar/calendar-ui-1.png");
const CalendarUI2 = require("../../assets/images/projects/calendar/calendar-ui-2.png");
const CalendarUI3 = require("../../assets/images/projects/calendar/calendar-ui-3.png");


export const Projects: Project[] = [
    {
        title: "24h Design Service",
        text:
            "Redesign of a design service application to improve usability and efficiency, providing users with an intuitive grid-based tool for a seamless planning experience.",
        caseTitle: "",
        categories: ["Development"],
        path: "design-service",
        labels: [
            "React",
            "TypeScript",
            "Sass",
            "API",
            "React Query",
            "Context",
            "Vite",
        ],
        image: {
            alt: "Image for Boka Möte",
            src: DesignServiceStart,
        },
        startImage: DesignServiceStart,
        active: false,
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat nunc quis nunc facilisis dapibus. Donec rutrum odio eget consequat ornare. Suspendisse varius feugiat sem at sollicitudin. Proin gravida sit amet diam ac lacinia. Aliquam porta hendrerit libero, vitae auctor risus molestie ut. Duis in volutpat tellus.",
        roles: ["Frontend"],
        timeline: "3 months",
        tools: ["React", "TypeScript", "API", "Sass", "Vite", "React Query", "Context"],
        client: "Nobia",
        year: "2024",
        challenge: "",
        techStack: "",
        outcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat nunc quis nunc facilisis dapibus. Donec rutrum odio eget consequat ornare. Suspendisse varius feugiat sem at sollicitudin. Proin gravida sit amet diam ac lacinia. Aliquam porta hendrerit libero, vitae auctor risus molestie ut. Duis in volutpat tellus.",
        images: [DesignServiceUI1, DesignServiceUI2, DesignServiceUI3],
        research: null,
        competitiveAnalysis: null,
        competitiveAnalysisImage: null,
        personas: null,
        personasImage: null,
        initialDesignIdeas: null,
        initialDesignIdeasImage: null,
        prototyping: null,
        prototypingImages: null,
        userTesting: null,
    },
    {
        title: "Boka möte",
        text:
            "Redesign of book a meeting application to enhance performance by providing a comprehensive and research-driven user experience.",
        caseTitle: "Redesign of book a meeting application to enhance performance by providing a comprehensive and research-driven user experience.",
        categories: ["Development", "Design"],
        path: "boka-mote",
        labels: [
            "React",
            "TypeScript",
            "Context",
            "API",
            "Vite",
            "Sass",
            "UX",
            "UI",
        ],
        image: {
            alt: "Image for Boka Möte",
            src: BokaMoteStart,
        },
        startImage: BokaMoteStart,
        active: true,
        overview: `The revamped booking process is designed to improve the user experience by offering clear, intuitive pathways that help customers easily select the meeting type that best suits their needs. Whether it's a quick inquiry, a detailed design consultation, or something in between, the new flow allows users to make informed decisions and book the most appropriate meeting for them.

By segmenting the flow based on customer needs, the goal is to reduce confusion, minimize booking errors, and enhance satisfaction for both customers and designers. This approach ensures a seamless booking experience tailored to the diverse preferences of our users.`,
        roles: ["Frontend", "UX/UI"],
        timeline: "1 year",
        tools: ["React", "TypeScript", "EpiServer", "API", "Vite", "Cloudinary"],
        client: "Nobia",
        year: "2023/2024",
        challenge: "Increase the performance by creating a more inclusive and research-driven flow that captures all customers with diverse needs.",
        techStack: "The front end utilizes Vite together with React and TypeScript to create a visually appealing UI with reusable components, ensuring consistent design. Sass serves as the preprocessor for styling. Data is fetched from an API containing content sourced from EpiServer.",
        outcome: `The new booking flow, initially developed as an MVP for testing purposes, has evolved into a key component of the current solution. Its success, reflected in increased conversion rates, demonstrates its effectiveness in enhancing user experience and driving key actions on the platform.

Additionally, the transition to this new system has streamlined workflows for designers. With users now able to accurately select their meeting types, designers have seen improvements in efficiency, contributing to smoother operations.

The positive outcomes of this innovation have led to growing interest from other brands looking to integrate this solution into their systems, highlighting its potential for broader adoption.`,
        images: [BokaMoteUI1, BokaMoteUI2, BokaMoteUI3],
        research: null,
        competitiveAnalysis: null,
        competitiveAnalysisImage: null,
        personas: null,
        personasImage: null,
        initialDesignIdeas: null,
        initialDesignIdeasImage: null,
        prototyping: null,
        prototypingImages: null,
        userTesting: null,
    },
    {
        title: "TV Maze",
        text:
            "Creation of a web application that integrates with the TVmaze Public REST API.",
        caseTitle: "Creation of a web application that integrates with the TVmaze Public REST API.",
        categories: ["Development"],
        path: "tv-maze",
        labels: [
            "React",
            "TypeScript",
            "Next.js",
            "API",
            "Tailwind",
        ],
        image: {
            alt: "Image for TV Maze",
            src: TVMazeUI2,
        },
        startImage: TVMazeUI2,
        active: true,
        overview: `The developed web application enhances the user's ability to discover and manage TV show content efficiently. By implementing a search functionality, users can easily find TV shows and access detailed information. Additionally, the application allows users to create a list of their favorite shows, with persistence across sessions, ensuring that users can pick up where they left off. A special feature includes an upcoming episodes feed, which provides users with a chronological list of upcoming episodes for their favorite shows. The project was designed with scalability in mind, ensuring it could be built upon and extended by other developers in the future`,
        roles: ["Frontend"],
        timeline: "2 days",
        tools: ["React", "Next.js", "TypeScript", "API", "Tailwind"],
        client: "Personal project",
        year: "2024",
        challenge: "Build a performant, scalable web application that integrates with an external API while ensuring a seamless and intuitive user experience.",
        techStack: "The front end was developed using React, and TypeScript to create a responsive UI with reusable components. Tailwind CSS was employed for styling, ensuring a clean and modern interface. The application fetches data from the TVmaze API, leveraging Next.js for server-side rendering and improved performance.",
        outcome: "The resulting web application successfully meets the project requirements, offering a smooth user experience with features like search, detailed show information, favorites management, and upcoming episodes feed. The project serves as a strong foundation for future enhancements, such as adding more locales or expanding the range of available features.",
        images: [TVMazeUI3, TVMazeStart, TVMazeUI1],
        research: null,
        competitiveAnalysis: null,
        competitiveAnalysisImage: null,
        personas: null,
        personasImage: null,
        initialDesignIdeas: null,
        initialDesignIdeasImage: null,
        prototyping: null,
        prototypingImages: null,
        userTesting: null,
    },
    {
        title: "Hund Söker Hem",
        text:
            "A website for a fictional dog rescue company that allows people to easily find their perfect shelter dog-match.",
        caseTitle: "A pawfect match: Tailored dog adoption experiences for finding your ideal companion",
        categories: ["Development", "Design"],
        path: "hund-soker-hem",
        labels: ["React", "Node.js", "MongoDB", "Sass", "Redux", "Cypress"],
        image: {
            alt: "Image for Hund Söker Hem",
            src: HundSokerHemStart,
        },
        startImage: HundSokerHemStart,
        active: true,
        overview: `There are thousands of dogs currently in shelters and foster homes that are waiting to be adopted. A lot of people are willing to open their homes to save a loving dog and making them part of their families but are hesitant and worrying about finding the perfect fit that matches their lifestyle and preferences.

The main purpose of this project is to create a dog rescue website with a solution that goes beyond just presenting available dogs. The solution includes encouraging better communication overall and helping people to match them with the right dogs that fits their lifestyle and preferences.`,
        roles: ["Frontend", "UI"],
        timeline: "1 month",
        tools: ["React", "Node.js", "Sass", "Redux", "MongoDB", "Cypress"],
        client: "Final degree project",
        year: "2021",
        challenge: "How might we make it easier for people to find a rescue dog that matches their lifestyle and preferences?",
        techStack: "The front end is built with React to build rich UI with reusable components to easily keep a consistency design. Sass is used as a preprocessor. The back end is built with Node.js / Express.js and uses MongoDB as a database. I've created end to end tests with Cypress.",
        outcome: `The main goal is to create a website where people can easily find a dog that matches their lifestyle and preferences. By doing this, we hope to reduce the number of dogs being returned to the shelter due to a mismatch and instead increasing the number of dogs finding their forever homes.

We want to prepare the adopters in the best way by providing them necessarily information and guiding them through the whole adoption process.

The final product is deployed at Github pages and back end is hosted at Heroku. You can view the project live <a class="underline" href="https://josefinelofgren.github.io/hund-soker-hem">here.</a>`,
        images: [HundSokerHemUI1, HundSokerHemUI2, HundSokerHemUI3],
        research: null,
        competitiveAnalysis: null,
        competitiveAnalysisImage: null,
        personas: null,
        personasImage: null,
        initialDesignIdeas: null,
        initialDesignIdeasImage: null,
        prototyping: null,
        prototypingImages: null,
        userTesting: null,
    },
    {
        title: "Dog Friendly",
        text:
            "Creating a digital and interactive solution that makes it easier for dog owners to bring their four-legged friends to new places and adventures. ",
        caseTitle: "Don't leave your dog at home. Bring your dog on dog friendly adventures.",
        categories: ["Design"],
        path: "dog-friendly",
        labels: ["Research", "Persona", "User flow", "User testing", "Prototyping"],
        image: {
            alt: "Image for DogFriendly",
            src: DogFriendlyStart,
        },
        startImage: DogFriendlyStart,
        active: true,
        overview: "This project aims to create a digital and interactive solution that makes it easier for dog owners to bring their four-legged friends to new places and adventures. Dog Friendly gathers information about all dog related places in one app, such as veterinarians, dog friendly cafés, parks, beaches, saloons etc. The goal is to minimize the feeling of limitation and to encourage dog owners do involve their dogs in their daily life.",
        roles: ["UX/UI"],
        timeline: "2 months",
        tools: ["Pen & paper", "Adobe XD", "Adobe", "Photoshop"],
        client: "Personal project",
        year: "2021",
        challenge: "How might we make it easier for dog owners to involve their dogs in their daily life?",
        techStack: null,
        outcome: "When designing an app from scratch, it's easy to get overexcited and ambitious and aim at creating a complete product, which is most likely not possible since I worked on this project on my own and the timeline was less then 2 months. At some points I was working on two or three different extra features within the app at the same time, which made me lose a lot of focus on the main features.",
        images: [DogFriendlyUI1],
        research: `To get a better understanding of peoples feeling about bringing their dogs on trips or to public areas, I conducted 5 user interviews with different dog owners in different ages and lifestyles. Based on my 5 user interviews, I affinity mapped and synthesized my research, leading to the insights below.
        
        1. Difficult and time consuming
Participants described having a hard time finding information as well as frustration with how time-consuming the process of finding the information is, especially regarding hotels and restaurant where the information often is perceived as hidden or force them to make a phone call.

2. Incorrect information
Participants described how the information that can be found on the internet, often is incorrect or misleading.

3. Values customers insights
Participants described how previous costumers experience with how dog-friendly a public are is, is valuable in the considering of going there.
        `,
        competitiveAnalysis: `Concurrently with the user research, I conducted three competitive analysis on products that prvides equivalent part of our services. I analyzed the app's Tamedhunden, Hundvänligt and BringFido.

Beyond evaluating the capabilites of the app, the goal of my competivtive analysis was to find common themes of users experiences and learn how the product meets and fails to meet users goals and needs. I made a list of features I found most important and compared them. By doing this I saw a change of beating the competitors in those points.`,
        personas: `Now that I had defined the problem, it was time for me to move forward and create some user personas. Based on my research outcomes and insights, I created three user personas to reflect real user patterns.`,
        initialDesignIdeas: `I started drawing a map of the user flow followed by some simple sketches of different solutions to give freedom to my flow of thoughts and not be constrained by any details.

        Point #1: Login
Login is available with Google, Facebook and email. At first I wasn't sure if this function was necessary but as the idea of the app evolved. I quickly realised that it was needed if the user should be able to book through the app and store things such as favorites etc.

Point #2: Explore page
The explore page is where the user is directed to after logging in/signing up. The explore page contains a map where the user are able to see all dog friendly locations. The user need to accept location acitivity to be able to use the map. The user can still use the search function if the user doesn't want to allow location activity.

Point #3: Favorite
The favorite page is a place where the user can save places they would like to visit in the future. There's no limit of how many places a user can save as a favorite which made it hard to find a specific saved place in the list of favorites, therefor I added a filter function to make it easier to sort them by categories.`,
        prototyping: "After completing the low-fidelity and picking up what designs are key, there were a lot to finalize so I designed mid-fidelity to give more details about founts, buttons and visual hierarchy.",
        userTesting: `I asked the same participants as I used for my user interviews (5 participants) to test the prototype I had made for the app and asked them to explain their thoughts and feeling outload while going through the different stages. I wanted to see how they would interact with the features.

I made two different designs of the informative page of the chosen location and made the users try out both of them. The second design got much better feedback so I decided to go with it. The users gave me some valuable insights so I added some smaller details such as the address and a description for the email, website and share icons.`,
        competitiveAnalysisImage: DogFriendlyCompetitiveAnalysis,
        personasImage: DogFriendlyPersonas,
        initialDesignIdeasImage: DogFriendlyUserFlow,
        prototypingImages: [DogFriendlyLowFid1, DogFriendlyLowFid2, DogFriendlyLowFid3, DogFriendlyLowFid4],
    },
    {
        title: "Calendar",
        text:
            "A school project for keeping track of your schedule and tasks through a calendar.",
        caseTitle: "Keep track of your schedule and tasks through Calendar-todo app",
        categories: ["Development"],
        path: "calendar",
        labels: [
            "React",
            "TypeScript",
            "Firebase",
            "API",
            "Moment.js",
            "Bootstrap",
        ],
        image: {
            alt: "Image for Calendar",
            src: CalendarStart

        },
        startImage: CalendarStart,
        active: true,
        overview: `Calendar-todo app helps you organize your day, week, and month by scheduling events, setting reminders, and managing tasks efficiently. With its intuitive interface and seamless integration across devices, staying on top of your commitments has never been easier.`,
        roles: ["Frontend"],
        timeline: "6 months",
        tools: ["React", "Redux", "Firebase", "Material-UI", "Figma"],
        client: "School project",
        year: "2020",
        challenge: "Develop a user-friendly calendar application that integrates task management capabilities to enhance productivity and organization.",
        techStack: "The front end is built with React and Redux for state management. Firebase is used as the backend to store user data and authentication. Material-UI is used for styling components. The design was created using Figma.",
        outcome: `The final product is deployed using Firebase Hosting. You can explore the live application <a class="underline" href="https://josefinelofgren.github.io/react-calendar/">here.</a>`,
        images: [CalendarUI1, CalendarUI2, CalendarUI3],
        research: null,
        competitiveAnalysis: null,
        competitiveAnalysisImage: null,
        personas: null,
        personasImage: null,
        initialDesignIdeas: null,
        initialDesignIdeasImage: null,
        prototyping: "I started the project by planning, estimating a timeline and drawing some simple sketches in the design tool Invision to get a better understanding about the project itself and the components and functions I would need to create.",
        prototypingImages: [CalendarLowFid1, CalendarLowFid2],
        userTesting: null,
    },
];
