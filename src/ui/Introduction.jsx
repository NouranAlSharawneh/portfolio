import { LuDot } from 'react-icons/lu';
import ArrowDownShort from '../ui/ArrowDownShort';
import AvatarImg from '../../public/assets/iosEmoji.png';

const Introduction = () => {
  return (
    <div className="ml-1 border-b border-gray-600 py-3 sm:mx-auto sm:max-w-[85rem] md:gap-3 md:pb-8">
      <div className="flex items-center justify-between gap-2 pb-5 md:gap-3">
        <p className="text-2xl font-semibold text-gray-900 md:text-6xl">
          Introduction
        </p>
        <div className="flex items-center gap-1 md:gap-3">
          <p className="flex items-center rounded-xl bg-emerald-950 pr-3 text-[8px] font-semibold tracking-widest text-green-500 uppercase md:rounded-4xl md:pr-4 md:text-[11px]">
            <span className="inline-block pb-[1px] text-xl font-semibold md:h-5 md:w-5 md:pb-0.5 md:text-4xl md:tracking-tight">
              <LuDot className="md:h-5 md:w-5" />
            </span>
            Available for work
          </p>

          <ArrowDownShort />
        </div>
      </div>
      <div className="grid gap-4 rounded-3xl border border-gray-700 px-5 py-4 md:gap-0 md:px-10">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-5xl">
          A Software Engineer based in Khobar
        </h2>
        <div className="flex flex-col items-center justify-between md:flex-row md:gap-5">
          <p className="text-wrap text-gray-600 md:text-[19px]">
            Hi there! I&apos;m Nouran, a 22-year-old Software Engineer with a
            passion for web and mobile app development. I enjoy solving complex
            problems and continuously learning new technologies to build
            innovative solutions. I am currently seeking opportunities in
            software development to further enhance my skills and contribute to
            impactful projects.
          </p>

          <div className="mt-10 flex h-50 w-70 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-t from-gray-800 to-gray-400 transition-transform duration-700 ease-in-out md:mt-0 md:h-40 md:w-40 md:rounded-full">
            <img
              className="h-full w-full cursor-zoom-in object-cover transition-transform duration-300 hover:scale-110"
              src={AvatarImg}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
