import React, { useState, useEffect, useRef, useCallback } from "react";

interface ICarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface IDesignProjectsProps {
  title: string;
  image: string;
  images: ICarouselImage[];
  description: string;
  problem: string;
  collaborators: string;
  designTools: string[];
  projectImage1: string;
  userFlowImage: string;
  wireFrameImage: string;
  highFidelityImage: string;
}

const DesignProjects: React.FC<IDesignProjectsProps> = ({
  title,
  image,
  images,
  description,
  problem,
  collaborators,
  designTools,
  projectImage1,
  userFlowImage,
  wireFrameImage,
  highFidelityImage,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = useCallback(() => setShowPopup(false), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClosePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClosePopup]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("popup-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("popup-open");
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  return (
    <div className="col-span-1 mb-4 pb-2 px-4 md:px-0">
      {/* Card */}
      <div
        className="relative rounded-[20px] overflow-hidden cursor-pointer bg-white shadow-[0_19px_38px_rgba(0,0,0,0.7),0_15px_12px_rgba(0,0,0,0.22)]"
        onClick={handleShowPopup}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-[1.4]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          <h5 className="text-center text-[1.4rem] font-bold text-[var(--color-black)]">
            {title}
          </h5>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
          {/* Popup inner */}
          <div
            ref={popupRef}
            className="max-w-[90%] max-h-[90%] overflow-y-auto bg-white p-16 rounded-2xl max-sm:p-10"
          >
            {/* Close button */}
            <button
              className="fixed z-10 right-24 top-16 bg-white text-[var(--color-black)] text-xl font-semibold border-none cursor-pointer lg:right-24 lg:top-24 max-sm:right-2 max-sm:top-16"
              onClick={handleClosePopup}
            >
              ✕
            </button>
            {/* Carousel */}
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((img) => (
                  <div key={img.id} className="min-w-full scale-90">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="text-center pt-4">
              <h4 className="text-[var(--color-black-variant)] font-semibold">
                {title}
              </h4>

              <p className="pt-2 text-[var(--color-black-variant)]">
                {description}
              </p>

              <p className="pt-2 text-[var(--color-black-variant)]">
                <span className="font-bold">Timeline:</span> 10 weeks
              </p>
              <p className="pt-2 text-[var(--color-black-variant)]">
                <span className="font-bold">Role:</span> UX/UI Designer &amp;
                Researcher
              </p>
              <p className="pt-2 text-[var(--color-black-variant)]">
                <span className="font-bold">Context:</span> Case Study – Google
                UX Design Certificate
              </p>
              <p className="pt-2 text-[var(--color-black-variant)]">
                <span className="font-bold">Deliverables:</span> Mobile app,
                Lo-fi Prototype, Hi-fi Prototype, User Testing
              </p>

              <img
                src={projectImage1}
                alt="Project overview"
                className="w-full mt-4"
              />

              <h5 className="pt-4 font-bold text-[var(--color-black-variant)]">
                Problem
              </h5>
              <p className="pt-2 text-[var(--color-black-variant)]">
                {problem}
              </p>

              <h5 className="pt-4 font-bold text-[var(--color-black-variant)]">
                User Flow
              </h5>
              <img
                src={userFlowImage}
                alt="User flow"
                className="w-full mt-2"
              />

              <h5 className="pt-4 font-bold text-[var(--color-black-variant)]">
                Wireframes
              </h5>
              <img
                src={wireFrameImage}
                alt="Wireframes"
                className="w-full mt-2"
              />

              <h5 className="pt-4 font-bold text-[var(--color-black-variant)]">
                High Fidelity Prototype
              </h5>
              <img
                src={highFidelityImage}
                alt="High fidelity prototype"
                className="w-full mt-2"
              />

              <h6 className="pt-4 font-semibold text-[var(--color-black-variant)]">
                Designed by:
              </h6>
              <p className="text-[var(--color-black-variant)]">
                {collaborators}
              </p>

              <h6 className="font-semibold text-[var(--color-black-variant)] mt-2">
                Design Tools that I used:
              </h6>
              <div className="mt-1">
                {designTools.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block mt-3 mr-4 mb-1 border border-[var(--color-primary-yellow)] rounded-[1.2rem] px-2 py-1 text-[var(--color-primary-yellow)] text-[0.8rem]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignProjects;
