import Image from "../image/image";

interface Props {
    title?: string;
    image: string;
}

const ProjectImage = ({ title, image }: Props) => {

    return (
        <div className={`p-6 md:p-12 lg:p-24 lg:pb-12 lg:pt-12 pt-12 pb-12 grid grid-cols-1 gap-12`}>
            {title && <h3>{title}</h3>}
            <div className="bg-lightGrey rounded-xl p-12 flex justify-center items-center">
                <Image
                    src={image}
                    alt={`Image of ${title}`}
                />
            </div>
        </div>
    );
};

export default ProjectImage;