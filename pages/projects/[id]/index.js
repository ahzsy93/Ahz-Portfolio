import ProjectDetails from "../../../components/ProjectDetails";
import { projects } from "../../../data/projects";
import Container from "../../../components/Container";

const project = ({ project }) => {
  return (
    <Container>
      <div className="mt-28">
        <ProjectDetails project={project}></ProjectDetails>
      </div>
    </Container>
  );
};

export const getStaticProps = async (context) => {
  const project = projects.find((el) => el.id == context.params.id);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default project;
