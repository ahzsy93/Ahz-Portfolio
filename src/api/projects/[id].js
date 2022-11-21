import { projects } from "../../../data/projects";

export default function handler({ query: { id } }, res) {
  const filtered = projects.filter( (project) => project.id == id);
  
  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Project with the id ${id} is not found` });
  }
}
