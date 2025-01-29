import ArrowDown from '../ui/ArrowDown';

const HeroFooter = () => {
  return (
    <div className="mx-3 flex items-center justify-end gap-2 border-b border-gray-600 py-3 sm:mx-auto sm:max-w-[85rem] md:gap-3 md:border-t">
      <p className="text-xl font-semibold text-gray-900 md:text-4xl">
        See More
      </p>
      <ArrowDown />
    </div>
  );
};

export default HeroFooter;
