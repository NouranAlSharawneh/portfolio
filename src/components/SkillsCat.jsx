import { FaCircleCheck } from 'react-icons/fa6';
import Title from '../ui/Title';
import { ReactTyped } from 'react-typed';

const SkillsCat = () => {
  const greetings = [
    'Hello',
    'Hola',
    'Bonjour',
    'Hallo',
    'Olá',
    'مرحبا',
    '안녕하세요',
    'नमस्ते',
  ];
  return (
    <div className="grid grid-rows-[0.5fr_0.5fr_1fr] gap-2">
      {/* <div className="border-b border-gray-600 pb-5">
        <Title title={'Experties'} />
        <p className="tracking-widest text-gray-600">
          HTML, CSS, JavaScript, React.js, Next.js, Flutter, tailwind, Power
          Platforms, Agile Methodologies, Git, three.js, Figma
        </p>
      </div> */}
      {/* Greetings */}
      <div className="mb-5 flex items-center justify-center rounded-3xl bg-gray-950 px-4 pt-3">
        <p className="text-3xl tracking-widest text-gray-100">
          <ReactTyped strings={greetings} typeSpeed={70} backSpeed={50} loop />
        </p>
      </div>
      {/* SoftSkills */}
      <div className="border-y border-gray-600 py-5">
        <Title title={'SoftSkills'} />
        <div className="grid gap-2">
          <div className="flex gap-3">
            <p className="rounded-2xl bg-blue-700 px-2 py-1 text-xl text-gray-100">
              #Creativity
            </p>
            <p className="rounded-2xl border border-gray-600 px-2 py-1 text-xl text-gray-600">
              #Teamwork
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 md:w-65">
            <p className="rounded-2xl border border-gray-600 px-2 py-1 text-xl text-gray-600">
              #Time_Managment
            </p>
            <p className="rounded-2xl border border-gray-600 px-2 py-1 text-xl text-gray-600">
              #Flexibility
            </p>
            <p className="rounded-2xl bg-blue-700 px-2 py-1 text-xl text-gray-100">
              #Communication
            </p>
          </div>
        </div>
      </div>
      {/* Experince */}
      <div>
        <Title title={'Experince'} />
        <div className="grid gap-8 rounded-3xl bg-gray-950 px-4 py-3 text-gray-100 md:gap-6">
          <div className="flex items-center justify-between">
            <p className="rounded-2xl bg-gray-100 px-2 py-1 text-gray-950">
              June - Oct 2024
            </p>
            <FaCircleCheck size={30} fill="gray" />
          </div>
          <div>
            <p className="mb-[-0.5em] font-extralight text-gray-300">
              Worley Coop
            </p>
            <p className="text-4xl">Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCat;
