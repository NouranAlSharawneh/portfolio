import MainNav from '../components/MainNav';
import Introduction from '../ui/Introduction';
import AboutImage from '../ui/AboutImage';
import GetInTouch from '../ui/GetInTouch';

const AboutMe = () => {
  return (
    <section className="mx-3 border-b border-gray-600 pb-15 sm:mx-auto sm:max-w-[85rem] sm:pl-5">
      <MainNav active={'about-me'} />
      <div className="grid pt-5 md:grid-cols-[0.8fr_1.2fr] md:gap-13">
        <AboutImage />
        <div className="">
          <Introduction />
          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
