import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectItem project={project} key={index}></ProjectItem>
      ))}
    </>
  );
};

export default ProjectList;
