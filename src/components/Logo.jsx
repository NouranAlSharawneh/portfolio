import imgLogo from '../../public/assets/logo.svg';

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <img
      src={imgLogo}
      alt="N logo letter"
      className="h-9 w-9 cursor-pointer rounded-full bg-gray-900 p-1"
      onClick={handleClick}
    />
  );
};

export default Logo;
