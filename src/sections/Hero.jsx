import HeroFooter from '../components/HeroFooter';
import PortfolioText from '../components/PortfolioText';
import { LuArrowDownRight } from 'react-icons/lu';

const Hero = () => (
  <>
    <div className="md: mx-3 grid grid-rows-[1.5fr_1fr] py-3 sm:mx-auto sm:max-w-[85rem] md:h-[80dvh] md:grid-cols-[0.3fr_1.7fr] md:grid-rows-1 md:gap-14 md:py-5">
      <div className="order-1 h-full md:order-2">
        <PortfolioText />
      </div>
      <div className="order-2 mt-auto md:order-1">
        <span className="ml-auto text-9xl font-bold text-gray-900">
          <LuArrowDownRight
            strokeWidth={4}
            viewBox="0 0 19 19"
            className="ml-auto cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-[200deg] md:hover:rotate-[-100deg]"
          />
        </span>
        <div className="pt-5 md:pb-8">
          <div className="flex justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
            <p>#hello_world</p>
          </div>
          <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
            <p>#softwareEngineer</p>
            <p className="cursor-wait">#💻</p>
          </div>
          <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
            <p>#coder</p>
            <p>#webDeveloper</p>
          </div>
          <div className="flex items-center justify-end gap-2 border-b border-gray-600 pb-1 text-xl text-gray-700">
            <p>#next.Js</p>
            <p>#react.Js</p>
            <p>#flutter</p>
          </div>
        </div>
      </div>
    </div>
    <HeroFooter />
  </>
);

export default Hero;
