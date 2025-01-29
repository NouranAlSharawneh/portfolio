import imgLogo from '../../public/assets/logo.svg';

const Logo = () => {
  return (
    <img
      src={imgLogo}
      alt="N logo letter"
      className="h-9 w-9 rounded-full bg-gray-900 p-1"
    />
  );
};

export default Logo;
