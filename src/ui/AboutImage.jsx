import AboutImg from '../../public/assets/pfp.jpg';
const AboutImage = () => {
  return (
    <div
      className="w-full rounded-3xl bg-cover bg-center bg-no-repeat px-7 py-4 sepia-40"
      style={{ backgroundImage: `url(${AboutImg})` }}
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          accusamus ipsa atque voluptatum id, animi, tempora iste quae alias vel
          officia qui facilis quos inventore? Aliquid, natus earum? Eligendi,
          libero?
        </p>
      </div>
    </div>
  );
};

export default AboutImage;
