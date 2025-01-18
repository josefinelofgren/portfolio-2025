import { useParams } from "react-router-dom";
import { Projects } from "../data/project/project";
import ProjectHero from "../components/project/projectHero";
import ProjectImage from "../components/project/projectImage";
import ProjectTwoColumns from "../components/project/projectTwoColumns";
import ProjectImages from "../components/project/projectImages";


const Work = () => {
    const { subPath } = useParams();

    const project = Projects.find((p) => p.path === subPath);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail pb-12">
            <ProjectHero client={project.client} title={project.caseTitle} image={project.image.src} />
            <ProjectImage image={project.startImage} />
            <div className="project__overview p-6 md:p-12 lg:p-24 lg:pt-12 lg:pb-12 flex flex-col md:flex-row gap-24">
                <div>
                    <h4>Overview</h4>
                    <p className="whitespace-pre-line">{project.overview}</p>
                </div>
                <div className="flex flex-row gap-24">
                    <div>
                        <div className="mb-6">
                            <h4>Roles</h4>
                            {project.roles.map((role, index) => {
                                return (
                                    <p key={index}>{role}</p>
                                )
                            })}
                        </div>
                        <div className="mb-6">
                            <h4>Timeline</h4>
                            <p>{project.timeline}</p>
                        </div>
                        <div>
                            <h4>Year</h4>
                            <p>{project.year}</p>
                        </div>
                    </div>
                    <div >
                        <div className="mb-6">
                            <h4>Tools</h4>
                            {project.tools.map((tool, index) => {
                                return (
                                    <p key={index}>{tool}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="project__challenge md:rounded-xl bg-lightGrey md:m-12 p-6 md:p-12 lg:m-24 lg:mt-12 lg:mb-12 lg:p-24 lg:pb-24 lg:pt-24 pt-24 pb-24 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-[30%_70%]">
                <h4>The challenge</h4>
                <p className="whitespace-pre-line">{project.challenge}</p>
            </div>
            {
                project.research && (
                    <ProjectTwoColumns title={"Research"} text={project.research} />
                )
            }
            {
                project.competitiveAnalysis && (
                    <ProjectTwoColumns title={"Competitive analysis"} text={project.competitiveAnalysis} />
                )
            }
            {
                project.competitiveAnalysisImage && (
                    <ProjectImage image={project.competitiveAnalysisImage} />
                )
            }
            {
                project.personas && (
                    <ProjectTwoColumns title={"Personas"} text={project.personas} />
                )
            }
            {
                project.personasImage && (
                    <ProjectImage image={project.personasImage} />
                )
            }
            {
                project.initialDesignIdeas && (
                    <ProjectTwoColumns title={"Initial design ideas"} text={project.initialDesignIdeas} />
                )
            }
            {
                project.initialDesignIdeasImage && (
                    <ProjectImage image={project.initialDesignIdeasImage} />
                )
            }
            {
                project.prototyping && (
                    <ProjectTwoColumns title={"Prototyping"} text={project.prototyping} />
                )
            }
            {
                project.prototypingImages && (
                    <ProjectImages images={project.prototypingImages} />
                )
            }
            {
                project.userTesting && (
                    <ProjectTwoColumns title={"User testing"} text={project.userTesting} />
                )
            }
            {
                project.techStack && (
                    <ProjectTwoColumns title={"Tech Stack"} text={project.techStack} />
                )
            }
            <ProjectImages title={"Final UI"} images={project.images} />
            <ProjectTwoColumns title={"Outcome"} text={project.outcome} />
        </div >
    );
};

export default Work;