import './app.scss';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import AOS from "aos";
import Header from '../Header';
import Home from '../Home';
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import BackToTopButton from '../BackToTopButton';

const App = () => {
  const { darkMode } = useSelector((state) => state.displayOptions);

  useEffect(() => {
    AOS.init({duration: 1000});
    // AOS.refresh();
  }, []);

  return (
    <div className={ !darkMode ? "app" : "app app--darkmode" }  >
      <Header />
      <BackToTopButton />
      <div className='app__sections'>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
