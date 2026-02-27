import CV from "../assets/cv.pdf";
import { TechIcon } from "../components/TechIcon";

const About = () => {
  const handleButtonClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-wrap items-stretch">
      <div className="w-full md:w-2/3 bg-black text-primary pl-12 pt-8 pb-12">
        <h1
          className="
    font-tusker z-[999]
    pt-[10%] leading-[10rem] text-[10rem]
    max-sm:mt-12 max-sm:text-[7.5rem] max-sm:leading-[1.1]
    max-sm:text-center max-sm:pr-6 max-sm:pt-32
  "
        >
          Hi, I'm Gülşah
        </h1>

        <p className="pr-[30%] pt-[5%] pb-[3%] max-sm:text-center max-sm:p-0">
          I am a Software Developer with a focus on Frontend Development based
          in Munich, currently working at a German AI startup. <br /> At my
          workplace, I contribute to a software platform that uses artificial
          intelligence to automate document processing and analysis. I work in
          both software development and UX-UI Design.
          <br />
          <br /> With 10 years of experience across software development,
          design, and architecture, I bring a unique and versatile perspective
          to every project. My dual background in code and design means I think
          both analytically and visually. I notice the details that make the
          difference between something that works and something that truly feels
          right.
          <br />
          <br />I build intuitive, high-quality interfaces using modern
          technologies, while ensuring reliability through manual testing and
          automated tests. I collaborate closely with backend engineers and
          operate within modern development workflows.
          <br />
          <br />I am genuinely enthusiastic about learning and adapt quickly to
          new technologies, tools, and environments. I enjoy the challenge of
          stepping outside my comfort zone whether picking up a new framework,
          collaborating with a diverse team, or approaching a familiar problem
          from a completely fresh angle.
        </p>

        <div className="flex gap-2 mt-2 max-sm:justify-center">
          <button onClick={handleButtonClick} className="btn">
            Learn more
          </button>
          <a href={CV} download className="btn">
            Download CV
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="w-full md:w-1/3 min-h-[300px] bg-about-foto bg-cover bg-right-top" />

      {/* Experience */}
      <div className="w-full px-8 py-16 bg-primary text-black --font-sans">
        <div className="flex flex-wrap gap-x-12">
          {/* Web Developer */}
          <div className="w-full md:w-[30%] text-center pb-16">
            <i className="fa-solid fa-code text-[2rem] pb-4 block" />
            <a
              href="/works/webdev"
              className="text-black no-underline hover:text-[var(--color-primary-yellow)]"
            >
              <h4 className="font-bold text-xl">Web Developer</h4>
            </a>
            <br />
            <p>
              "I am passionate about programming and love the challenge of
              turning my ideas into functional and beautiful websites and
              applications by my problem solving skills."
            </p>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Tech Stack:
            </h5>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <TechIcon className="devicon-html5-plain colored" label="HTML5" />
              <TechIcon className="devicon-css3-plain colored" label="CSS3" />
              <TechIcon
                className="devicon-javascript-plain colored"
                label="JavaScript"
              />
              <TechIcon
                className="devicon-typescript-plain colored"
                label="TypeScript"
              />
              <TechIcon
                className="devicon-react-original colored"
                label="React"
              />
              <TechIcon className="devicon-nextjs-plain" label="Next.js" />
              <TechIcon
                className="devicon-nodejs-plain colored"
                label="NodeJS"
              />
              <TechIcon
                className="devicon-mongodb-plain colored"
                label="MongoDB"
              />
              <TechIcon
                className="devicon-tailwindcss-plain colored"
                label="Tailwind"
              />
              <TechIcon
                className="devicon-bootstrap-plain colored"
                label="Bootstrap"
              />
            </div>

            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Dev Tools:
            </h5>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <TechIcon className="devicon-github-original" label="GitHub" />
              <TechIcon className="devicon-git-plain colored" label="Git" />
              <TechIcon
                className="devicon-azuredevops-plain colored"
                label="Azure DevOps"
              />
              <TechIcon className="devicon-vite-plain colored" label="Vite" />
            </div>

            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Deployment & Services:
            </h5>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <TechIcon className="devicon-vercel-original" label="Vercel" />
              <TechIcon
                className="devicon-firebase-plain colored"
                label="Firebase"
              />
              <TechIcon
                className="devicon-netlify-plain colored"
                label="Netlify"
              />
            </div>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Testing:
            </h5>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              {/* Unit Tests & Manual Tests have no devicon */}
              <span className="text-sm self-center">
                Playwright, Unit Tests, Manual Tests
              </span>
            </div>
          </div>

          {/* Designer */}
          <div className="w-full md:w-[30%] text-center pb-16">
            <i className="fa-solid fa-draw-polygon text-[2rem] pb-4 block" />
            <a
              href="/works/design"
              className="text-black no-underline hover:text-[var(--color-primary-yellow)]"
            >
              <h4 className="font-bold text-xl">Designer</h4>
            </a>
            <br />
            <p>
              "I enjoy designing user interfaces and user experience with skills
              in typography, layout, and color theory, I'm able to create unique
              and effective designs."
            </p>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Tools I design with:
            </h5>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <TechIcon className="devicon-figma-plain colored" label="Figma" />
              <TechIcon
                className="devicon-sketch-plain colored"
                label="Sketch"
              />
              <TechIcon
                className="devicon-photoshop-plain colored"
                label="Adobe"
              />
            </div>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Things I enjoy doing:
            </h5>
            <p className="mb-[0.2rem]">
              UI Design, User Testing, <br /> User Story
            </p>
          </div>

          {/* Architect */}
          <div className="w-full md:w-[30%] text-center pb-16">
            <i className="fa-solid fa-pen-ruler text-[2rem] pb-4 block" />
            <a
              href="/works/arc"
              className="text-black no-underline hover:text-[var(--color-primary-yellow)]"
            >
              <h4 className="font-bold text-xl">Architect</h4>
            </a>
            <br />
            <p>
              "As an experienced architect with many years of background, I have
              honed my skills in problem-solving and design to create visually
              appealing solutions."
            </p>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Tools I draw with:
            </h5>
            <p className="mb-[0.2rem]">Archicad</p>
            <p className="mb-[0.2rem]">Autocad</p>
            <p className="mb-[0.2rem]">Artlantis</p>
            <h5 className="font-semibold text-[1rem] pt-[0.8rem] pb-[0.4rem]">
              Project Types
            </h5>
            <p className="mb-[0.2rem]">
              Hotels, Housing, Stadium, <br /> Cultural Houses <br /> Religious
              Buildings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
