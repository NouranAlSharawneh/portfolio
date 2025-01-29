import MainNav from '../components/MainNav';
import Introduction from '../ui/Introduction';
import AboutImage from '../ui/AboutImage';
import GetInTouch from '../ui/GetInTouch';

const AboutMe = () => {
  return (
    <section className="mx-3 h-dvh sm:mx-auto sm:max-w-[85rem]">
      <MainNav active={'about-me'} />
      <div>
        <Introduction />
        <AboutImage />
        <GetInTouch />
      </div>
    </section>
  );
};

export default AboutMe;
