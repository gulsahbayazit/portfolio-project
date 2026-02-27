import logo from "../assets/logo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { useState, useEffect } from "react";

const SECTIONS = ["home", "works", "about", "contact"];
type Section = (typeof SECTIONS)[number];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isWhiteNavbar =
    activeSection === "home" ||
    activeSection === "about" ||
    activeSection === "contact";

  const logoSrc =
    activeSection === "about" || activeSection === "contact" ? whiteLogo : logo;

  const navLinkBase =
    "relative text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer " +
    "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 " +
    "after:bg-[var(--color-primary-red)]";

  const navLinkColor = isWhiteNavbar ? "text-white" : "text-neutral-900";

  const activeBorder = "after:scale-x-100";

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-8 backdrop-blur-md bg-white/10">
      {" "}
      <button onClick={() => scrollTo("home")} className="flex-shrink-0">
        <img className="h-12 w-auto" src={logoSrc} alt="Logo" />
      </button>
      <nav className="font-[family-name:var(--font-sans)]">
        <ul className="flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollTo("about")}
              className={`${navLinkBase} ${navLinkColor} ${
                activeSection === "about" ? activeBorder : ""
              }`}
            >
              About
            </button>
          </li>

          <li className="relative">
            <button
              onClick={() => scrollTo("works")}
              className={`${navLinkBase} ${navLinkColor} ${
                activeSection === "works" ? activeBorder : ""
              }`}
            >
              Works
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollTo("contact")}
              className={`${navLinkBase} ${navLinkColor} ${
                activeSection === "contact" ? activeBorder : ""
              }`}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
