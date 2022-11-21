import { useEffect, useState } from "react";
import CategoryChip from "../../components/CategoryChip";
import PageNameSection from "../../components/PageNameSection";
import ProjectList from "../../components/ProjectList";
import { projects } from "../../data/projects";
import Container from "../../components/Container";

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [renderProjects, setRenderProjects] = useState(projects);
  const [isAllCategories, setIsAllCategories] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!categories === undefined || !categories.length < 1) {
      let filtered = [];
      projects.forEach((project) => {
        if (categories.includes(project.category)) {
          if (!filtered.includes(project)) {
            filtered.push(project);
          }
        }
      });
      setRenderProjects(filtered);
      setIsAllCategories(false);
    } else {
      setRenderProjects(projects);
      setIsAllCategories(true);
    }
  }, [categories]);

  const cats = ["Packages", "Business Cards", "Logo", "Banner", "Kelk", "Advertising"];
  return (
    <Container className=" mx-auto px-4 my-auto py-4">
      <div className="mt-10">
        <PageNameSection title={"Discover my work"}></PageNameSection>
        <div className="">
          <div className="flex flex-wrap justify-center space-x-1 space-y-1 mx-auto h-25 my-6 mt-4">
            <CategoryChip
              onClick={() => {
                setCategories([]);
                setIsAllCategories(true);
                setFilteredProjects(projects);
              }}
              category="All Projects"
              key="All Projects"
              allActive={isAllCategories}
            >
              All Projects
            </CategoryChip>
            {cats.map((cat, index) => (
              <CategoryChip
                key={index}
                category={cat}
                onClick={() => {
                  if (!categories.includes(cat)) {
                    setCategories((categories) => [...categories, cat]);
                  } else {
                    setCategories(categories.filter((e) => e !== cat));
                  }
                }}
              >
                  {cat}
                
              </CategoryChip>
            ))}
          </div>
        </div>
        <div className="grid-rows-1">
          <div className="flex w-256 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
            <ProjectList projects={renderProjects}></ProjectList>
          </div>
        </div>

      </div>
    </Container>
  );
}
