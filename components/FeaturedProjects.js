import { FeaturedProjectHolder } from "./FeaturedProjectHolder";
import { projects } from "../data/projects";
const FeaturedProjects = () => {
  return (
    <div id="featured">
      <div role="main" className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 underline-offset-8 underline">
          Featured Projects
        </h1>
        <p className="text-base leading-normal text-center text-gray-600  mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Projects delivered to happy clients.
        </p>
      </div>
      <div className="lg:flex items-stretch md:mt-12 mt-8">
        <div className="lg:w-1/2 flex flex-col">
          <div className="sm:flex items-stretch justify-between xl:gap-x-8 gap-x-6 ">
            <FeaturedProjectHolder
              project={projects[0]}
              styles={"sm:w-1/2 relative"}
            ></FeaturedProjectHolder>
            <FeaturedProjectHolder
              project={projects[1]}
              styles={"sm:mt-0 mt-4 sm:w-1/2 relative"}
            ></FeaturedProjectHolder>
          </div>
          <div className="relative hidden lg:block md:block">
            <FeaturedProjectHolder
              project={projects[5]}
              styles={"relative"}
              large
              margined
            ></FeaturedProjectHolder>
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative hidden lg:block md:block">
            <FeaturedProjectHolder
              project={projects[3]}
              styles={"relative"}
              large
            ></FeaturedProjectHolder>
          </div>


          <div className="sm:flex items-stretch justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <FeaturedProjectHolder
              project={projects[7]}
              styles={"relative w-full"}
            ></FeaturedProjectHolder>
            <FeaturedProjectHolder
              project={projects[9]}
              styles={"relative w-full sm:mt-0 mt-4"}
            ></FeaturedProjectHolder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
