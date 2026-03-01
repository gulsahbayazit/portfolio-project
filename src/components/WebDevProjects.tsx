import React, { useState, useEffect, useRef, useCallback } from "react";

interface ICarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface IProjectsWebdevProps {
  title: string;
  info: string;
  image: string;
  images: ICarouselImage[];
  description: string;
  collaborators: string;
  techStacks: string[];
  link: string;
}

const ProjectsWebdev: React.FC<IProjectsWebdevProps> = ({
  title,
  info,
  image,
  images,
  description,
  collaborators,
  techStacks,
  link,
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClosePopup]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("popup-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("popup-open");
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="col-span-1 mb-4 pb-2">
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

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          <h3 className="text-[1.4rem] font-bold text-[var(--color-black)]">
            {title}
          </h3>
          <p className="text-[0.9rem] font-semibold text-[var(--color-black)]">
            {info}
          </p>
          <div className="flex flex-row flex-wrap gap-2 mt-3">
            {techStacks.map((tech, i) => (
              <span
                key={i}
                className="rounded-[1.2rem] px-2 py-1 text-[0.8rem] whitespace-nowrap"
                style={{
                  backgroundColor: "var(--color-primary-yellow)",
                  color: "var(--color-black)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <>
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
                  {images.map((img, i) => (
                    <div key={i} className="min-w-full scale-90">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <h3 className="text-[1.4rem] font-bold text-[var(--color-primary-yellow)] mt-4">
                {title}
              </h3>
              <p className="text-[var(--color-black-variant)]">{description}</p>

              <p className="text-[var(--color-black-variant)] font-semibold mt-4">
                Developed and designed by:
              </p>
              <p className="text-[var(--color-black-variant)]">
                {collaborators}
              </p>

              <p className="text-[var(--color-black-variant)] font-semibold mt-4">
                Tech Stacks that I used:
              </p>
              <div>
                {techStacks.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block mt-3 mr-4 mb-1 border border-[var(--color-primary-yellow)] rounded-[1.2rem] px-2 py-1 text-[var(--color-primary-yellow)] text-[0.8rem]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-[var(--color-black-variant)] font-semibold mt-4">
                See it on github:
              </p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline"
              >
                {link}
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsWebdev;
