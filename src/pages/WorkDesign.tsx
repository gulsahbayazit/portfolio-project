import Projects from "../components/DesignProjects";
import artcode_1 from "../assets/artcode_1.webp";
import artcode_2 from "../assets/artcode_2.webp";
import ecoco_1 from "../assets/ecoco_1.webp";
import ecoco_2 from "../assets/ecoco_2.webp";
import ecoco_3 from "../assets/ecoco_3.webp";
import ecoco_4 from "../assets/ecoco_4.webp";
import ecoco_5 from "../assets/ecoco_5.webp";
import project_1 from "../assets/project_design_1.webp";
import project_2 from "../assets/project_design_2.webp";
import project_design_1_1 from "../assets/project_design_1_1.webp";
import project_design_1_2 from "../assets/project_design_1_2.webp";
import project_design_1_3 from "../assets/project_design_1_3.webp";
import project_design_1_4 from "../assets/project_design_1_4.webp";
import persona2 from "../assets/persona2.webp";
import userFlow from "../assets/userflow.png";
import wireframe2 from "../assets/wireframe2.webp";
import highfidelity2 from "../assets/highdifelity2.webp";

const WorkDesign = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[var(--color-primary)] min-h-screen">
        <div className="container mx-auto pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            +{" "}
            <h1 className="col-span-full text-center text-[var(--color-black-variant)] font-tusker text-title pt-2 pb-8 max-sm:pt-8 max-sm:pb-8 text-xl">
              UX/UI Design Projects
            </h1>
            <Projects
              title="Artcode App"
              image={project_1}
              description="Have you ever been frustrated in an art gallery because you didn't have enough information about the artwork or couldn't see the small info table because of the crowd or thought, What does this painting mean? Who created it and when? Most of us ask such questions in an art gallery. There is the artwork mobile application 'Artistry' for that. It will give users a guide in a gallery or museum that concerns users who want to learn more about artworks by giving users a quick overview."
              projectImage1={project_design_1_1}
              problem="How could I create a product that increases the visitor's interaction with the artwork?"
              userFlowImage={project_design_1_2}
              wireFrameImage={project_design_1_3}
              highFidelityImage={project_design_1_4}
              collaborators="Gülsah Bayazit"
              designTools={["Figma"]}
              images={[
                { id: 1, src: artcode_1, alt: "Image 1" },
                { id: 2, src: artcode_2, alt: "Image 2" },
              ]}
            />
            <Projects
              title="Ecoco Website"
              image={project_2}
              description="Ecoco is a cotton towel website. It gives user more information and trust about the product that they bought."
              problem="How could I create a product that increases the user's trust and interest on cotton towels?"
              projectImage1={persona2}
              userFlowImage={userFlow}
              wireFrameImage={wireframe2}
              highFidelityImage={highfidelity2}
              collaborators="Gülsah Bayazit"
              designTools={["Figma"]}
              images={[
                { id: 1, src: ecoco_1, alt: "Image 1" },
                { id: 2, src: ecoco_2, alt: "Image 2" },
                { id: 3, src: ecoco_3, alt: "Image 3" },
                { id: 4, src: ecoco_4, alt: "Image 4" },
                { id: 5, src: ecoco_5, alt: "Image 5" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDesign;
