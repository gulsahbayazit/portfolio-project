import { useState, useEffect } from "react";

const Home = () => {
  const roles = ["DEVELOPER", "DESIGNER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const handleButtonClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="m-0 p-0 min-h-screen pb-20 bg-cover bg-center bg-repeat bg-home">
      <div className="relative z-[999] px-6 pt-24 md:pt-[26vh] text-primary">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex flex-col">
              <h1 className="font-tusker text-hero leading-[0.96]">
                {roles[(index + 1) % roles.length]}
              </h1>
              <h1 className="font-tusker text-hero leading-[0.96]">
                {roles[index]}
              </h1>
            </div>
          </div>

          <div className="w-full md:w-1/2 self-center text-center md:text-left">
            <h4 className="text-bio leading-[1.3] pb-8 pt-4 md:pb-0 md:pt-0">
              I am a, <br />
              <span className="underline-accent">
                Software Developer &amp; Designer
              </span>
              <br />
              based in{" "}
              <span className="underline-accent">Munich, Germany.</span> <br />
              I'm passionate about creating
              <br />
              user friendly and functional websites <br />
              using the latest technologies.
            </h4>
            <div className="pt-4 md:pt-8 flex md:block justify-center">
              <button onClick={handleButtonClick} className="btn">
                See my projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
