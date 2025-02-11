import { ImLinkedin2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp, IoMdOpen } from 'react-icons/io';
import { IoCopyOutline } from 'react-icons/io5';
import { FcPhoneAndroid } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Title from './Title';

const GetInTouch = () => {
  return (
    <div className="ml-1 flex flex-col justify-between pt-3 sm:mx-auto sm:max-w-[85rem] md:gap-3">
      <Title title="Get In Touch" />
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
        <div className="grid w-70 gap-6 rounded-3xl bg-gray-950 px-4 py-3 md:w-62 md:gap-4">
          <MdEmail fill="white" size={45} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <button
                className="flex cursor-pointer items-center justify-between gap-x-0.5 rounded-md bg-gray-800 px-2 py-1 pt-2 text-[12px] transition-colors duration-700 ease-in-out hover:bg-gray-700 md:text-[11px]"
                onClick={() => {
                  navigator.clipboard.writeText(
                    'nouran-al-sharawneh@hotmail.com',
                  );
                  toast(`✉️ Email Copied!`, {
                    position: 'bottom-right',
                  });
                }}
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
                nouran-al-sharawneh@hotmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="grid w-70 gap-6 rounded-3xl bg-blue-700 px-4 py-3 md:w-62 md:gap-4">
          <ImLinkedin2 fill="white" size={45} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <a
                className="flex items-center justify-between gap-1 rounded-md bg-blue-800 px-2 py-1 text-[12px] transition-colors duration-700 ease-in-out hover:bg-blue-900"
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
        <div className="grid w-70 gap-6 rounded-3xl bg-green-600 px-4 py-3 md:w-62 md:gap-4">
          <IoLogoWhatsapp fill="white" size={45} />
          <div className="pt-9 text-gray-200">
            <hr />
            <div className="flex cursor-pointer items-center justify-between pt-3">
              <a
                className="flex items-center justify-between gap-1 rounded-md bg-green-800 px-2 py-1 text-[12px] transition-colors duration-700 ease-in-out hover:bg-green-700"
                href="https://wa.me/966507688769"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcPhoneAndroid />
                Contact Me
              </a>
              <a
                href="https://wa.me/966507688769"
                className="text-xs tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                0507688769
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
