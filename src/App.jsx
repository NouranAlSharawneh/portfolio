import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default App;
