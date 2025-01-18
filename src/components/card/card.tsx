import Image from "../image/image";
import { GoArrowRight } from "react-icons/go";
import { GoDot } from "react-icons/go";

interface Props {
    title: string;
    text: string;
    image: { alt: string, src: string };
    labels: string[];
    categories: string[]
    active: boolean;
}

const Card = ({ title, text, image, labels, active }: Props) => {
    return (
        <div
            className={`card card group transform transition-transform duration-300 ease-in-out w-full ${!active ? "default-poiner" : "cursor-pointer"
                }`}
        >
            <div className="card__image relative aspect-[4/3] rounded-xl overflow-hidden bg-lightGrey p-12">
                <div className="group-hover:opacity-40 transition-all duration-300 ease-in-out w-[100%] max-w-2xl">
                    <Image
                        src={image.src}
                        alt={image.alt}
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {!active ? (
                        <p className="preamble">Coming soon</p>
                    ) : (
                        <GoArrowRight className="w-12 h-12 transform group-hover:animate-arrow-bounce" />
                    )}
                </div>
            </div>
            <div className="card__text pt-8">
                <div className="flex pb-2 items-center">
                    <h4>{title}</h4>
                </div>
                <p>{text}</p>
            </div>
            <div className="card__labels pt-2">
                {labels.map((category, index) => (
                    <div key={index} className="inline-block max-w-max pt-2 pb-2">
                        <p className="inline-block label">{category}</p>
                        {index < labels.length - 1 && (
                            <GoDot className="inline-block paragraph-small opacity-50 ml-2 mr-2 w-2" />
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};


export default Card;