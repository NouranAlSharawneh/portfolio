import MainNav from '../components/MainNav';
import SkillsCat from '../components/SkillsCat';
import { DiCss3, DiHtml5, DiPython, DiReact } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { FaFlutter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandThreejs } from 'react-icons/tb';
import HelloMe from '../ui/HelloMe';

const Skills = () => {
  const toolBoxIcons = [
    {
      name: 'React',
      icon: <DiReact />,
    },
    {
      name: 'JavaScript',
      icon: <RiJavascriptFill size={20} />,
    },
    {
      name: 'Python',
      icon: <DiPython size={20} />,
    },
    {
      name: 'CSS',
      icon: <DiCss3 size={20} />,
    },
    {
      name: 'Figma',
      icon: <FiFigma size={20} />,
    },
    {
      name: 'Github',
      icon: <BsGithub size={20} />,
    },
    {
      name: 'Three.Js',
      icon: <TbBrandThreejs size={20} />,
    },
    {
      name: 'HTML',
      icon: <DiHtml5 size={20} />,
    },

    {
      name: 'Tailwind',
      icon: <RiTailwindCssFill size={20} />,
    },
    {
      name: 'Flutter',
      icon: <FaFlutter size={20} />,
    },
  ];

  return (
    <section
      id="skills"
      className="mx-3 border-b border-gray-600 pb-5 sm:mx-auto sm:max-w-[85rem] sm:pl-5"
    >
      <MainNav active={'skills'} />
      <div className="grid grid-cols-1 grid-rows-[1fr_0.5fr] gap-9 pt-5 pl-1 md:grid-cols-[1.5fr_0.5fr] md:grid-rows-1">
        {/* right side */}
        <div className="grid gap-3 rounded-2xl bg-gray-200 px-3 py-2 md:grid-cols-2 md:grid-rows-2">
          <div className="relative grid gap-12 rounded-2xl bg-blue-700 px-5 pb-20 text-gray-100 md:col-span-2 md:gap-9">
            <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
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
              {/* <img
                src={MointerImg}
                className="absolute right-[-10px] bottom-[-22%] h-50 w-40 rotate-[-10deg] md:right-[30px] md:bottom-[-35%] md:h-130 md:w-130"
              /> */}
            </div>
          </div>
          <HelloMe />
          <div className="grid grid-rows-[auto_auto_1fr] rounded-2xl bg-gray-100 px-5 text-gray-900">
            <h4 className="pt-5 text-left text-6xl font-extrabold md:text-8xl">
              My ToolBox
            </h4>
            <p className="-mt-3 w-60 pb-3 tracking-wide text-gray-600">
              Explore the tools and technologies I use to develop my projects
            </p>
            <div className="flex flex-wrap gap-2 pb-5 md:pb-0">
              {toolBoxIcons.map((item) => (
                <div key={item.name} className="flex items-center">
                  <div className="text-md flex cursor-pointer items-center gap-3 rounded-md border-2 border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 transition-colors duration-300 ease-in-out hover:from-gray-200 hover:to-gray-100">
                    <span>{item.icon}</span>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
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
