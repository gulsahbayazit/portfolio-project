import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center h-full text-[var(--color-primary)] bg-[var(--color-black)] py-16">
      <h3 className="text-3xl font-semibold mb-6">
        Would you like to get in touch?
      </h3>

      <div className="flex gap-2 pt-2 mt-4 max-sm:justify-center">
        <a
          href="https://www.linkedin.com/in/guelsah-bayazit/"
          rel="noopener noreferrer"
          target="_blank"
          className="social-icon"
        >
          <i className="fa-brands fa-linkedin text-3xl" />
        </a>
        <a
          href="https://github.com/gulsahbayazit"
          rel="noopener noreferrer"
          target="_blank"
          className="social-icon"
        >
          <i className="fa-brands fa-github text-3xl" />
        </a>

        <a href="mailto:guelsah.bayazit@gmail.com" className="social-icon">
          <i className="fa-brands fa-google text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
