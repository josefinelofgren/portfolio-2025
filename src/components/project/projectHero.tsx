import useWordReveal from "../../hooks/useWordReveal";

interface Props {
    title: string;
    client: string;
    text?: string;
    image: string;
}

const ProjectHero = ({ title, client }: Props) => {

    const { words, visibleWords } = useWordReveal(title);

    return (
        <div className="project__hero p-6 md:p-12 lg:p-24 md:pt-24 md:pb-12 lg:pb-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
                <p className="preamble mb-5">{client}</p>
                <h1>
                    {
                        words.map((word, index) => (
                            < span
                                key={index}
                                className={`inline-block transition-opacity duration-500 ease-in-out ${index <= visibleWords ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {word}
                                {index < words.length - 1 && '\u00A0'}
                            </span>
                        ))}</h1>
            </div>
        </div >
    );
};

export default ProjectHero;