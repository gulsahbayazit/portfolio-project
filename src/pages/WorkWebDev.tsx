import project_1 from "../assets/project_1.webp";
import project_2 from "../assets/project_2.webp";
import project_3 from "../assets/project_3.webp";
import project_4 from "../assets/project_4.webp";
import project_5 from "../assets/project_5.webp";
import virus_1 from "../assets/virus_1.webp";
import virus_2 from "../assets/virus_2.webp";
import virus_3 from "../assets/virus_3.webp";
import virus_4 from "../assets/virus_4.webp";
import expathub_1 from "../assets/expat_1.webp";
import expathub_2 from "../assets/expat_2.webp";
import expathub_3 from "../assets/expat_3.webp";
import expathub_4 from "../assets/expat_4.webp";
import expathub_5 from "../assets/expat_5.webp";
import expathub_6 from "../assets/expat_6.webp";
import tbn_1 from "../assets/tbn_1.webp";
import tbn_2 from "../assets/tbn_2.webp";
import tbn_3 from "../assets/tbn_3.webp";
import tbn_4 from "../assets/tbn_4.webp";
import gulsah_1 from "../assets/gulsah_1.jpg";
import gk from "../assets/gk-wedding.webp";

import Projects from "../components/WebDevProjects";

const WorkWebDev = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <h1 className="col-span-full text-center text-[var(--color-primary)] font-tusker text-title pt-12 pb-8 max-sm:pt-8 max-sm:pb-8 text-xl">
            Web Development Projects
          </h1>

          <Projects
            title="Twice but Nice"
            info="Sustainable online platform for the exchange of furnitures"
            image={project_1}
            description="Twice but Nice, it is creating a more sustainable future by encouraging the reuse of furniture. Unique points-based system makes it easy for users to buy and sell second-hand furniture, while user-friendly platform ensures a smooth and seamless experience. By giving new life to pre-loved furniture, you're not only reducing waste, but also promoting a more circular economy. Twice but Nice is the go-to platform for anyone looking to make a smart, eco-friendly purchase."
            collaborators="Gülsah Bayazit"
            techStacks={[
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "Node.js",
              "MongoDB",
              "Bootstrap",
              "Cyclic",
            ]}
            images={[
              { id: 1, src: tbn_1, alt: "Image 1" },
              { id: 2, src: tbn_2, alt: "Image 2" },
              { id: 3, src: tbn_3, alt: "Image 3" },
              { id: 4, src: tbn_4, alt: "Image 4" },
            ]}
            link="https://github.com/gulsahbayazit/SecondHandWebsite-server"
          />

          <Projects
            title="Expathub 101"
            info="Website where expats support each other in abroad"
            image={project_2}
            description="Expathub 101 was created by two expats who are also technology enthusiasts. They recognized the challenges faced by many expats who move to a new country, and saw an opportunity to use technology to help ease the transition process. This is a platform for expats that benefit the experiences of others. It creates a one-stop-shop for expats, offering a range of resources to help them thrive in their new home country. People can create an account to add their own recommendations. It has three main parts. 1. Finding an accomodation 2. Starting to language courses and 3. Discovering Social Life. User can categorise their recommendation and search according to categorisation."
            collaborators="Gülsah Bayazit, Ulkar Isayeva"
            techStacks={[
              "HTML5",
              "CSS3",
              "Javascript",
              "Handlebars",
              "Node.js",
              "MongoDB",
              "Bootstrap",
            ]}
            images={[
              { id: 1, src: expathub_1, alt: "Image 1" },
              { id: 2, src: expathub_2, alt: "Image 2" },
              { id: 3, src: expathub_3, alt: "Image 3" },
              { id: 4, src: expathub_4, alt: "Image 4" },
              { id: 5, src: expathub_5, alt: "Image 5" },
              { id: 6, src: expathub_6, alt: "Image 6" },
            ]}
            link="https://github.com/gulsahbayazit/Expat_101_Project"
          />

          <Projects
            title="Virus Game"
            info="Shooting Game Project inspired from Corona Virus"
            image={project_3}
            description="Welcome to the exciting world of virus eradication! In this fast-paced shooting game, you'll be armed with a powerful syringe to take down dangerous viruses and protect the health of your community. Your mission is simple: shoot the viruses before they infect anyone else and collect 300 points to finish it. Get ready to blast away at the germs and become a hero in the battle against illness!"
            collaborators="Gülsah Bayazit"
            techStacks={["HTML5", "CSS3", "Javascript", "p5.js"]}
            images={[
              { id: 1, src: virus_1, alt: "Image 1" },
              { id: 2, src: virus_2, alt: "Image 2" },
              { id: 3, src: virus_3, alt: "Image 3" },
              { id: 4, src: virus_4, alt: "Image 4" },
            ]}
            link="https://github.com/gulsahbayazit/Virus-Game"
          />

          <Projects
            title="GK Wedding"
            info="Wedding Website"
            image={project_4}
            description="You are currently visiting my personally designed and programmed wedding website. I created this website to share my wedding details with my guests."
            collaborators="Gülsah Bayazit"
            techStacks={["HTML5", "CSS3", "Javascript", "React", "Next.js"]}
            images={[{ id: 1, src: gk, alt: "Image 1" }]}
            link="https://gulsah-kivanc-wedding-nine.vercel.app/"
          />

          <Projects
            title="Gülsah Bayazit"
            info="Personal Portfolio Website"
            image={project_5}
            description="You are currently visiting my personally designed and programmed website. That includes my portfolio, my resume, my work experience, and a few other things."
            collaborators="Gülsah Bayazit"
            techStacks={[
              "HTML5",
              "CSS3",
              "Typescript",
              "React",
              "Tailwind CSS",
            ]}
            images={[{ id: 1, src: gulsah_1, alt: "Image 1" }]}
            link="https://github.com/gulsahbayazit/my-portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWebDev;
