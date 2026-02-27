import React from "react";

function Footer() {
  const currentPage = window.location.pathname;
  const isWhiteFooter =
    currentPage === "/" ||
    currentPage === "/contact" ||
    currentPage === "/about";

  return (
    <footer
      className={`
        w-full text-center py-4
        ${isWhiteFooter ? "text-primary bg-black" : "text-black bg-white"}
      `}
    >
      <span>
        © {new Date().getFullYear()} Designed & Built with &hearts; by Gülşah
        Bayazit
      </span>
    </footer>
  );
}

export default Footer;
