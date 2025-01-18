import Image from "../image/image";

interface Props {
    title?: string;
    images: string[];
}

const ProjectImages = ({ title, images }: Props) => {

    return (
        <div className="p-6 md:p-12 lg:p-24 lg:pb-12 lg:pt-12 pt-12 pb-12">
            {title && <h3>{title}</h3>}
            {images.length === 1 && (
                <div className="bg-lightGrey rounded-xl p-12 flex justify-center items-center">
                    <Image
                        src={images[0]}
                        alt={`Image of ${title}`}
                    />
                </div>
            )}

            {images.length === 2 && (
                <div className="flex flex-col md:flex-row gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="bg-lightGrey rounded-xl p-12 flex-1 flex justify-center items-center">
                            <Image
                                src={image}
                                alt={`Image ${index + 2} of ${title}`}
                            />
                        </div>
                    ))}
                </div>
            )}

            {images.length === 3 && (
                <div className="flex flex-col gap-6">
                    <div className="bg-lightGrey rounded-xl p-12 flex justify-center items-center">
                        <Image
                            src={images[0]}
                            alt={`Image 1 of ${title}`}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        {images.slice(1).map((image, index) => (
                            <div key={index} className="bg-lightGrey rounded-xl p-12 flex-1 flex justify-center items-center">
                                <Image
                                    src={image}
                                    alt={`Image ${index + 2} of ${title}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectImages;