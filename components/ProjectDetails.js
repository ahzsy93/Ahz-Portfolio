
import SliderSwiper from "./SliderSwiper";
import ToolCard from "./ToolCard";

const ProjectDetails = ({ project }) => {
  const tools = project.tools.split("|");
  return (
    <>
      <main className="py-0">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <div
            className="w-full h-full bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: "url(" + project.image + ")",
            }}
          >
            {/* <img
            src={project.image}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          /> */}
          </div>
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {project.category}
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {project.title}
            </h2>
            <div className="flex mt-3">
              <p className="font-semibold text-gray-200 text-sm">
                {project.client}
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Used Tools
          </h2>

          <div className="w-full h-28 flex space-x-4 items-start  mb-8 ">
            {tools.map((tool) => (
              <ToolCard tool={tool}></ToolCard>
            ))}
          </div>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Project Description
          </h2>
          <p className="pb-6">{project.description}</p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Project Shots
          </h2>
          <SliderSwiper media={project.media}></SliderSwiper>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded mt-8">
            {project.description}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;
