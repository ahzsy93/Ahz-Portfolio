export const TimelineItem = ({ position, company, period, desc }) => {
  return (
    <li className="mb-5">
      <div className="flex group items-center ">
        <div className="bg-white group-hover:bg-blue-500 z-10 rounded-full border-2 border-blue-500 h-5 w-5 transition-color ease-in-out"></div>
        <div className="flex space-x-2 p-2">
          <div className="bg-blue-400 group-hover:bg-blue-500 transition-all delay-75  h-2 w-2 rounded-full items-center"></div>
          <div className="bg-blue-300 group-hover:bg-blue-500 transition-all delay-150 h-2 w-2 rounded-full items-center"></div>
          <div className="bg-blue-200 group-hover:bg-blue-500 transition-all delay-200 h-2 w-2 rounded-full items-center"></div>
        </div>
        <div className="flex-1 ml-4 z-10 font-medium">
          <div className="order-1 space-y-2 border group-hover:border-gray-400 transition-all ease-in-out delay-200 shadow-only px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-2xl">{position}</h3>
            <p className="pb-4 text-sm text-gray-500">
              <span className="italic">{company}</span>, {period}
            </p>
            <hr />
            <ul className="text-gray-400 group-hover:text-gray-600 transition-all delay-200">
              {desc.map((item) => (
                <li className="text-sm font-medium leading-snug tracking-wide" key={item}>
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};
