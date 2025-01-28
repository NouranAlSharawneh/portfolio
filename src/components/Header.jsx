import imgLogo from "../../public/assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mx-3 py-2 border-b border-gray-600 sm:max-w-[85rem] sm:mx-auto sm:px-5 md:py-4 ">
        <div className="flex items-center gap-3">
          <img
            src={imgLogo}
            alt="N logo letter"
            className="bg-gray-900 w-9 h-9 p-1 rounded-full "
          />
          <p className="text-xl font-semibold md:text-4xl text-gray-900">
            Nouran AlSharawneh
          </p>
        </div>

        <p className="text-xl font-semibold md:text-4xl text-gray-900">
          Software Engineer
        </p>
      </header>
    </>
  );
};

export default Header;
