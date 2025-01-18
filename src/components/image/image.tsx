import React, { useEffect, useState } from "react";

interface Props {
    src: string;
    alt: string;
}

const Image = ({
    src,
    alt,
}: Props) => {

    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <img
            className={`transition-opacity duration-500 ease-out ${imageVisible ? "opacity-100" : "opacity-0"
                }`}
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
        />
    );
};

export default Image;