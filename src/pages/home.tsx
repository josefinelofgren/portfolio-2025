import { Link } from "react-router-dom";
import Hero from "../components/hero/hero";
import { Projects } from "../data/project/project";
import Card from "../components/card/card";

function Home() {

  return (
    <div className="home">
      <Hero />
      <div className="projects p-6 md:p-12 lg:p-24 grid grid-cols-1 md:grid-cols-2  gap-12 w-full min-h-screen">
        {Projects.map((project, index) => {
          if (project.active) {
            return (
              <Link key={index} to={`/work/${project.path}`}>
                <Card key={index} active={project.active} title={project.title} text={project.text} image={project.image} labels={project.labels} categories={project.categories} />
              </Link>
            )
          } else {
            return (
              <Card key={index} active={project.active} title={project.title} text={project.text} image={project.image} labels={project.labels} categories={project.categories} />
            )
          }
        })}
      </div>
    </div>
  );
}

export default Home;
