import { GrDocumentUser } from 'react-icons/gr';
import Logo from './Logo';

const MainNav = ({ active }) => {
  return (
    <div className="ml-1 flex items-center justify-between gap-2 border-b border-gray-600 pt-3 pb-1.5 sm:mx-auto sm:max-w-[85rem] md:gap-3">
      <div className="flex items-center gap-3 md:gap-5">
        <Logo />
        <div>
          <nav>
            <ul className="flex items-center gap-3 pl-3 text-[18px] text-gray-700 md:gap-10 md:pl-5 md:text-xl">
              {['About Me', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.toLowerCase().replace(' ', '-'),
                      );
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 1,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className={
                      active === item.toLowerCase().replace(' ', '-')
                        ? 'rounded-b-sm border-b-4 border-gray-900 pb-2 md:px-5'
                        : 'text-gray-500'
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <span className="h-6 w-6 rounded-full bg-gray-800 pt-1.5 pl-1 md:h-9 md:w-9 md:pt-2 md:pl-1.5">
        <GrDocumentUser
          className="text-sm font-thin text-white md:text-xl"
          cursor="pointer"
          title="download resume"
        />
      </span>
    </div>
  );
};

export default MainNav;
