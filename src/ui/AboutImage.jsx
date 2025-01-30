import AboutImg from '../../public/assets/pfp.jpg';
const AboutImage = () => {
  return (
    <div
      className="w-full rounded-3xl bg-gray-500 bg-cover bg-center bg-no-repeat px-7 py-4 grayscale filter"
      style={{ backgroundImage: `url(${AboutImg})` }}
      loading="lazy"
    >
      <div className="flex h-full flex-col gap-50 text-white md:justify-between">
        <h3 className="w-60 text-7xl">
          <span className="block text-2xl font-extralight">Hello,</span>
          My name is
          <span className="decoration-italic underline decoration-pink-400 decoration-wavy decoration-2">
            <span> Nouran</span>
          </span>
        </h3>
        <p className="text-right text-sm text-balance text-gray-400">
          I consider myself a hardworking problem solver who constantly seeks
          new skills and explores new technologies to deliver high-quality
          solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutImage;
