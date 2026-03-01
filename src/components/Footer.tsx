const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-4 bg-[var(--color-primary)] text-[var(--color-black-variant)]">
      {" "}
      <span>
        © {new Date().getFullYear()} Designed & Built with &hearts; by Gülşah
        Bayazit
      </span>
    </footer>
  );
};

export default Footer;
