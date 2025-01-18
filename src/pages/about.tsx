import Button from "../components/button/button";
import Image from "../components/image/image";
import { Educations } from "../data/education/education";
import { Experiences } from "../data/experience/experience";
import useWordReveal from "../hooks/useWordReveal";

const About = () => {

  const text = "About me";
  const { words, visibleWords } = useWordReveal(text);

  return (
    <div className="about">
      <div className="about__me flex flex-col md:flex-row items-center justify-between gap-24 p-6 md:p-12 lg:p-24 pt-12 pb-24 lg:pt-12 md:pb-24 h-full">
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
            <div>
              <p className="leading-relaxed mb-8">
                I am a frontend developer with a strong focus on creating intuitive, user-friendly applications using React, TypeScript, and other modern tools like Vue and Next.js. Experienced in building scalable solutions for diverse platforms, collaborating with cross-functional teams, and ensuring high-quality user experiences. Passionate about delivering exceptional digital experiences and continuously growing through new challenges.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                When I am not coding, you can find me hanging out with my dog, practicing yoga, reading a good book, sharing a bottle of wine with friends, or getting competitive with a board game.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-1/3 relative flex flex-col items-center justify-center">
          <div className="relative w-[100%] max-w-[400px] aspect-[1/1] rounded-full overflow-hidden">
            <div className="opacity-100 transition-all duration-500 ease-out hover:opacity-0">
              <Image
                src={require("../assets/images/jossan.jpg")}
                alt="Photo of Josefine Löfgren"
              />
            </div>
            <div className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-out hover:opacity-100">
              <Image
                src={require("../assets/images/jossan-2.jpg")}
                alt="Photo of Josefine Löfgren"
              />
            </div>
          </div>
          <a href="/josefine-lofgren_CV.pdf" download>
            <Button text={"Download CV"} />
          </a>
        </div>
      </div>
      <div className="about__experience bg-lightGrey p-6 md:p-12 lg:p-24 pt-24 pb-24 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h4 className="mb-8">Education</h4>
          {Educations.map((education, index) => (
            <div
              key={index}
              className={`${index !== Educations.length - 1 ? "mb-8" : ""
                }`}
            >
              <p>{education.title}</p>
              <p className="paragraph-small opacity-80">{`${education.school}, ${education.date}`}</p>
            </div>
          ))}
        </div>
        <div>
          <h4 className="mb-8">Employment</h4>
          {Experiences.map((experience, index) => (
            <div
              key={index}
              className={`${index !== Experiences.length - 1 ? "mb-8" : ""
                }`}
            >
              <p>{experience.title}</p>
              <p className="paragraph-small opacity-80">{`${experience.company}, ${experience.date}`}</p>
            </div>
          ))}
        </div>
      </div >
    </div>
  );
};

export default About;
