import { TimelineItem } from "./TimelineItem";

const Timeline = ({ experience }) => {
  return (
    <div className="relative">
      <div
        className="border-r-2 border-blue-500 absolute h-full top-0"
        style={{ left: "9px" }}
      ></div>
      <ul className="list-none m-0 p-0 text-left">
        {experience.map((exp) => (
          <TimelineItem
            position={exp.position}
            company={exp.company}
            period={exp.period}
            desc={exp.desc}
            key={exp.id}
          ></TimelineItem>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
