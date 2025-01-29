import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
};

export default App;
