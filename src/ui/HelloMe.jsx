import { useState, useEffect } from 'react';
import AvatorImg from '../../public/assets/me.png';

const HelloMe = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowText(true);
          setTimeout(() => {
            setShowText(false);
          }, 3000);
        } else {
          setShowText(false);
        }
      },
      { rootMargin: '0px 0px -40% 0px' },
    );
    observer.observe(document.querySelector('.hello-me'));
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  };
  return (
    <div
      className="hello-me relative grid h-full overflow-hidden rounded-2xl bg-gradient-to-t from-gray-400/70 to-gray-200 px-5"
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={AvatorImg}
        className="mt-auto -mb-20 h-70 w-auto cursor-pointer lg:-mb-5"
        alt=""
      />
      {showText && (
        <span className="absolute top-[30%] -right-10 -translate-x-1/2 transform rounded-lg bg-gray-100 px-3 py-1 text-base text-gray-900 transition-opacity duration-600 md:top-[30%] lg:-right-0">
          Hello there!👋🏼
        </span>
      )}
    </div>
  );
};

export default HelloMe;
