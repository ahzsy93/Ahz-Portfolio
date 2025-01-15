import PageNameSection from "../components/PageNameSection";
import Timeline from "../components/Timeline";
import { RoughNotationGroup } from "react-rough-notation";
import AnimatedHeadline from "../components/AnimatedHeadline";
import ToolCard from "../components/ToolCard";
import {experience} from "../data/experience"
import Container from "../components/Container";

export default function About() {
  const colors = ["#f59e0b", "#3b82f6", "#f43f5e", "#6366f1"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const tools = [
    "Photoshop",
    "Illustrator",
    "Kelk",
    "Php",
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "React",
  ];
  return (
      <Container className="mx-auto px-4 my-auto py-4 ">
        <div className="mt-10">
          <PageNameSection title={"Know my journey!"}></PageNameSection>
          <section className="flex w-full mx-auto my-8 ">
            <div className="grid-rows-1">
              <div className="flex grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                <h1 className="text-7xl text-gray-600">Hello! I'm</h1>
                <div className="w-2/3">
                  <RoughNotationGroup show={true}>
                    <AnimatedHeadline color={color}>
                      <h1 className="text-4xl md:text-7xl font-bold text-black my-2">
                        Ali Zahedah
                      </h1>
                    </AnimatedHeadline>
                  </RoughNotationGroup>
                </div>

                <div className="mt-8">
                  <p className="pb-6 text-lg text-gray-700">
                    IT Support | Driving Efficiency & Customer Success | Creative Graphic Designer with talent for developing unique custom
                    artwork. Innovative approach to ideas and concept development.
                    Works at fast pace to meet tight deadlines. Enthusiastic team
                    player ready to contribute to work success. With 7+ years of experience, I specialize in delivering top-tier IT support, optimizing online operations, and enhancing SEO to drive growth. Proficient in CRM tools and POS Systems, Google Workspace, Office 365, and web services, I excel at resolving technical challenges, streamlining workflows, and fostering strong client relationships.
                  </p>
                </div>

                <div className="mt-16">
                  <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                    Location
                  </h2>
                  <p className="italic text-lg text-gray-700">
                    Dubai - United Arab Emirates
                  </p>
                  <p className="italic text-lg text-gray-700">Damascus - Syria</p>
                </div>
                <div className="mt-16">
                  <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                    Tech Stack
                  </h2>

                  <div className="flex grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-3 grid-cols-3">
                    {tools.map((tool) => (
                      <ToolCard tool={tool}></ToolCard>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                <Timeline experience={experience}></Timeline>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
}
