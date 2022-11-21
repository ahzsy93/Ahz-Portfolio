import { ParallaxBanner } from "react-scroll-parallax";
const PageNameSection = ({ title }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          speed: -10,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className=" text-5xl md:text-7xl font-bold text-center md:text-center uppercase">
                {title}
              </h1>
            </div>
          ),
        },
      ]}
      className="aspect-auto h-44 bg-gray-100"
    ></ParallaxBanner>
  );
};

export default PageNameSection;
