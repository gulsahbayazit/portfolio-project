const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-[var(--color-primary)]  text-[var(--color-black-variant)]">
      <span>
        © {new Date().getFullYear()} Designed & Built with &hearts; by Gülşah
        Bayazit
      </span>
    </footer>
  );
};

export default Footer;
