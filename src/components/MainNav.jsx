import { BsArrowDownCircle } from 'react-icons/bs';

const MainNav = () => {
  return (
    <div className="mx-3 flex items-center justify-end gap-2 border-b border-gray-800 py-3 sm:mx-auto sm:max-w-[85rem] md:gap-3 md:border-t">
      <p className="text-xl font-semibold text-gray-900 md:text-4xl">
        See More
      </p>
      <BsArrowDownCircle className="ml-2 cursor-help text-2xl font-thin text-gray-800 transition-all duration-400 ease-in-out hover:translate-y-1 md:text-4xl" />
    </div>
  );
};

export default MainNav;
