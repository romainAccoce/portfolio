import './app.scss';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AOS from "aos";
import Header from '../Header';
import Home from '../Home';
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import BackToTopButton from '../BackToTopButton';
import Burger from '../Burger';

const App = () => {
  const dispatch= useDispatch();
  const { darkMode } = useSelector((state) => state.displayOptions);

  useEffect(() => {
    AOS.init({duration: 1000});
    // AOS.refresh();
  }, []);

  return (
    <div className={ !darkMode ? "app" : "app app--darkmode" }  >
      <Header />
      <Burger />
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
