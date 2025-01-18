import useWordReveal from "../../hooks/useWordReveal";
import Image from "../image/image";

const Hero = () => {

    const text = "I'm a frontend developer who builds immersive and user-friendly applications.";
    const { words, visibleWords } = useWordReveal(text);

    return (
        <div className="hero flex flex-col md:flex-row items-center justify-between gap-24 p-6 md:p-12 lg:p-24 pt-12 pb-24 lg:pt-12 md:pb-24 h-full">
            <div className="md:w-2/3 flex items-center justify-center h-full">
                <div>
                    <h3 className="pb-6">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={`inline-block transition-opacity duration-500 ease-in-out ${index <= visibleWords ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {word}
                                {index < words.length - 1 && '\u00A0'}
                            </span>
                        ))}
                    </h3>
                    <p className="preamble text-gray-700 max-w-xl">
                        Check out my projects on <a className="underline" href="https://github.com/josefinelofgren">Github</a>,
                        connect with me on <a className="underline" href="https://www.linkedin.com/in/josefinelofgren/">LinkedIn</a>,
                        or just <a className="underline" href="mailto:josefine.lofgren@live.se">drop me an email</a> saying hi.
                    </p>
                </div>
            </div>
            <div className="w-[100%] md:w-1/3 relative flex flex-col items-center justify-center">
                <div
                    className={`relative w-[100%] max-w-[400px] aspect-[1/1] rounded-full overflow-hidden`}
                >
                    <div className="opacity-100 transition-all duration-500 ease-out hover:opacity-0">
                        <Image
                            src={require("../../assets/images/jossan.jpg")}
                            alt="Photo of Josefine Löfgren"
                        />
                    </div>
                    <div className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-out hover:opacity-100">
                        <Image
                            src={require("../../assets/images/jossan-2.jpg")}
                            alt="Photo of Josefine Löfgren"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;