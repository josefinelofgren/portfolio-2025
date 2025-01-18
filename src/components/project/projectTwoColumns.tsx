"use client";

interface Props {
    title: string;
    text: string;
}

const ProjectTwoColumns = ({ title, text }: Props) => {

    return (
        <div className="p-6 md:p-12 lg:p-24 pt-12 pb-12 lg:pt-12 lg:pb-12 grid grid-cols-1 md:grid-cols-[30%_70%]">
            <h4>{title}</h4>
            <p className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    );
};

export default ProjectTwoColumns;