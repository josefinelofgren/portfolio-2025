export type Project = {
    title: string;
    text: string;
    caseTitle: string;
    categories: string[];
    path: string;
    labels: string[];
    image: {
        alt: string,
        src: StaticImageData,
    };
    startImage: StaticImageData,
    active: boolean;
    overview: string;
    roles: string[];
    timeline: string;
    tools: string[];
    client: string;
    year: string;
    challenge: string;
    research: string | null;
    competitiveAnalysis: string | null;
    competitiveAnalysisImage: StaticImageData | null;
    personas: string | null;
    personasImage: StaticImageData | null;
    initialDesignIdeas: string | null;
    initialDesignIdeasImage: StaticImageData | null;
    prototyping: string | null;
    prototypingImages: StaticImageData[] | null;
    userTesting: string | null;
    techStack: string | null;
    outcome: string;
    images: StaticImageData[];
};

export type Experience = {
    title: string;
    company: string;
    date: string;
};

export type Education = {
    title: string;
    school: string;
    date: string;
};
