import { useState } from 'react';
import AvatorImg from '../../public/assets/me.png';

const HelloMe = () => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  };
  return (
    <div
      className="relative grid h-full rounded-2xl bg-gradient-to-t from-gray-400/70 to-gray-200 px-5"
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={AvatorImg}
        className="mt-auto h-70 w-auto cursor-pointer"
        alt=""
      />
      {showText && (
        <span className="absolute top-[40%] right-0 -translate-x-1/2 transform rounded-lg bg-gray-100 px-3 py-1 text-base text-gray-900 transition-opacity duration-600 md:top-[30%]">
          Hello there!👋🏼
        </span>
      )}
    </div>
  );
};

export default HelloMe;
