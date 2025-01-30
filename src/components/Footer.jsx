const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-9 items-center justify-center border border-gray-200 bg-gray-300">
      <p className="text-sm text-gray-500">
        made with love 🤍 {year} ~
        <a
          href="https://github.com/NouranAlSharawneh/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          project repo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
