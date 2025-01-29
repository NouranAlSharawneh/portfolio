import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';

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
      </main>
    </>
  );
};

export default App;
