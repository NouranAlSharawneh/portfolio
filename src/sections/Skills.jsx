import MainNav from '../components/MainNav';
import SkillsCat from '../components/SkillsCat';

const Skills = () => {
  return (
    <section className="mx-3 sm:mx-auto sm:max-w-[85rem] sm:pl-5">
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
                src="../../public/assets/monitor.png"
                className="absolute right-[-10px] bottom-[-20%] h-50 w-40 md:bottom-[-35%] md:h-90 md:w-80"
              />
            </div>
          </div>
          <div className="bg-orange-500">
            <h4>Education</h4>
            <p>Price Mohammed Bin Fahd Uni.</p>
            <div>
              <p>BSc Software Engineering</p>
              <p>2020 - 2024</p>
            </div>
          </div>
          <div className="bg-green-600">
            <h4>Education</h4>
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
