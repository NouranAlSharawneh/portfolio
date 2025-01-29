import { ImLinkedin2 } from 'react-icons/im';
import ArrowDownShort from '../ui/ArrowDownShort';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp, IoMdOpen } from 'react-icons/io';
import { IoCopyOutline } from 'react-icons/io5';

const GetInTouch = () => {
  return (
    <div className="ml-1 flex flex-col justify-between pt-3 sm:mx-auto sm:max-w-[85rem] md:gap-3">
      <div className="flex items-center justify-between gap-2 pb-5 md:gap-3">
        <p className="text-2xl font-semibold text-gray-900 md:text-6xl">
          Get In Touch
        </p>

        <ArrowDownShort />
      </div>
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
        <div className="grid w-70 gap-4 rounded-3xl bg-gray-900 px-4 py-3 md:w-62">
          <MdEmail fill="white" size={40} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <button
                className="flex items-center justify-between gap-1 rounded-md bg-gray-800 px-2 py-1 pt-2 text-[11px] hover:bg-gray-700"
                onClick={() =>
                  navigator.clipboard.writeText(
                    'nouran-al-sharawneh@hotmail.com',
                  )
                }
              >
                <IoCopyOutline />
                Copy Email
              </button>
              <a
                href="mailto:nouran-al-sharawneh@hotmail.com"
                className="text-xs tracking-tight"
                target="_blank"
                rel="noopener noreferrer"
              >
                nouran-alsharawneh@hotmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="grid w-70 gap-4 rounded-3xl bg-blue-700 px-4 py-3 md:w-62">
          <ImLinkedin2 fill="white" size={40} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <a
                className="flex items-center justify-between gap-1 rounded-md bg-blue-800 px-2 py-1 text-[12px] hover:bg-blue-900"
                href="https://sa.linkedin.com/in/nouran-alsharawneh-1b5a7824b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdOpen />
                Open
              </a>
              <a
                href="https://sa.linkedin.com/in/nouran-alsharawneh-1b5a7824b"
                className="text-xs tracking-tight"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nouran-alsharawneh
              </a>
            </div>
          </div>
        </div>
        <div className="grid w-70 gap-4 rounded-3xl bg-green-600 px-4 py-3 md:w-62">
          <IoLogoWhatsapp fill="white" size={40} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <p className="flex items-center justify-between gap-1 rounded-md bg-green-800 px-2 py-1 text-[12px] hover:bg-green-700">
                <IoMdOpen />
                Contact Me
              </p>
              <p className="text-xs tracking-widest">0507688769</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
