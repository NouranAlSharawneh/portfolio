import MainNav from '../components/MainNav';
import Introduction from '../ui/Introduction';
import AboutImage from '../ui/AboutImage';
import GetInTouch from '../ui/GetInTouch';

const AboutMe = () => {
  return (
    <section className="mx-3 h-dvh sm:mx-auto sm:max-w-[85rem] sm:pl-5">
      <MainNav active={'about-me'} />
      <div className="grid md:grid-cols-[0.8fr_1.2fr] md:gap-13 md:pt-5">
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
