import MainNav from '../components/MainNav';
import SkillsCat from '../components/SkillsCat';
import MointerImg from '../../public/assets/monitor.png';

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-3 border-b border-gray-600 pb-5 sm:mx-auto sm:max-w-[85rem] sm:pl-5"
    >
      <MainNav active={'skills'} />
      <div className="grid grid-cols-1 grid-rows-2 gap-9 pt-5 pl-1 md:grid-cols-[1.5fr_0.5fr] md:grid-rows-1">
        {/* right side */}
        <div className="grid gap-3 bg-black px-3 py-2 md:grid-cols-2 md:grid-rows-2">
          {/* rounded-tl-4xl rounded-tr-xl rounded-br-4xl rounded-bl-xl */}
          <div className="relative grid gap-12 rounded-2xl bg-amber-400 px-5 pb-20 text-gray-900 md:col-span-2 md:gap-9">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <h4 className="text-7xl font-extrabold md:text-9xl">Education</h4>
              <p className="rounded-3xl bg-gray-900 px-4 py-1 text-xs text-gray-200 md:text-sm">
                2020 - 2024
              </p>
            </div>
            <div>
              <p className="mb-[-0.6em] pb-2 text-xl md:text-3xl">
                Prince Mohammed Bin Fahd University
              </p>
              <div className="flex gap-6">
                <p>BSc. Software Engineering</p>
                <p>(GPA 3.89/4.00)</p>
              </div>
              <img
                src={MointerImg}
                className="absolute right-[-10px] bottom-[-22%] h-50 w-40 rotate-[-10deg] md:right-[30px] md:bottom-[-35%] md:h-130 md:w-130"
              />
            </div>
          </div>
          <div className="grid grid-rows-[1fr_auto] items-center rounded-2xl bg-orange-500 px-5 text-gray-900">
            <div className="m-auto flex items-center justify-center">
              <img
                src="../../public/assets/windows.jpg"
                alt="windows 98 wallpaper"
                className="h-auto w-[80%] rounded-2xl"
              />
            </div>

            <h4 className="text-center text-7xl font-extrabold md:text-left md:text-8xl">
              Languages
            </h4>
            <div>
              <img src="" alt="" />
              <div className="flex justify-center gap-4"></div>
            </div>
          </div>
          <div className="grid rounded-2xl bg-green-600 px-5 text-gray-900">
            <h4 className="text-center text-7xl font-extrabold md:text-left md:text-9xl">
              Languages
            </h4>
            <p>Price Mohammed Bin Fahd Uni.</p>
            <div>
              <p>BSc Software Engineering</p>
              <p>2020 - 2024</p>
            </div>
          </div>
        </div>
        {/* left side */}
        <SkillsCat />
      </div>
    </section>
  );
};

export default Skills;
