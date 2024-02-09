import { ProjectItem } from "../types/types";

export const ProjectData: ProjectItem[] = [
  {
    title: "Boka möte",
    preamble:
      "Redesign of book a meeting application to enhance performance by providing a comprehensive and research-driven user experience.",
    category: "front end, ux",
    path: "boka-mote",
    button: "Case study",
    color: "#C3B5A7",
    labels: [
      "React",
      "Typescript",
      "EpiServer",
      "API",
      "Vite",
      "Sass",
      "Cloudinary",
      "UX",
      "UI",
    ],
    imgSrc: require("../assets/images/bokamote.png"),
    imgAlt: "Image for Boka Möte",
  },
  {
    title: "Hund Söker Hem",
    preamble:
      "A website for a fictional dog rescue company that allows people to easily find their perfect shelter dog-match.",
    category: "front end",
    path: "hund-soker-hem",
    button: "Case study",
    color: "#e8dcc3",
    labels: ["React", "Node.js", "MongoDB", "Sass", "Redux", "Cypress"],
    imgSrc: require("../assets/images/hundsokerhem.png"),
    imgAlt: "Image for Hund Söker Hem",
  },
  {
    title: "DogFriendly",
    preamble:
      "Creating a digital and interactive solution that makes it easier for dog owners to bring their four-legged friends to new places and adventures. ",
    category: "ux",
    path: "dog-friendly",
    button: "Case study",
    color: "#e8dcc3",
    labels: ["Research", "Persona", "User flow", "User testing", "Prototyping"],
    imgSrc: require("../assets/images/dogfriendly.png"),
    imgAlt: "Image for DogFriendly",
  },
  {
    title: "Calendar",
    preamble:
      "A school project for keeping track of your schedule and tasks through a calendar.",
    category: "front end",
    path: "calendar",
    button: "Case study",
    color: "#e8dcc3",
    labels: [
      "React",
      "Typescript",
      "Firebase",
      "API",
      "Moment.js",
      "Bootstrap",
    ],
    imgSrc: require("../assets/images/calendar.png"),
    imgAlt: "Image for Calendar",
  },
];
