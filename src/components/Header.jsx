import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header className="mx-3 flex items-center justify-between border-b border-gray-600 py-2 sm:mx-auto sm:max-w-[85rem] sm:px-5 md:py-4">
        <div className="flex items-center gap-3">
          <Logo />
          <p className="text-xl font-semibold text-gray-900 md:text-4xl">
            Nouran AlSharawneh
          </p>
        </div>

        <p className="text-xl font-semibold text-gray-900 md:text-4xl">
          Software Engineer
        </p>
      </header>
    </>
  );
};

export default Header;
