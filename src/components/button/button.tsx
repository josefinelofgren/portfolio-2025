"use client";

interface Props {
    text: string;
}

const Button = ({ text }: Props) => {

    return (
        <div className="button bg-lightGrey text-black pt-4 pb-4 pr-8 pl-8 rounded-full cursor-pointer hover:opacity-50 transition duration-300 mt-6">
            {text}
        </div>
    );
};

export default Button;