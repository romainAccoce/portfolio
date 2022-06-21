import './app.scss';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

import Header from '../Header';
import Home from '../Home';
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Error404 from "../Error404";

const App = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
    // AOS.refresh();
  }, []);

  return (
    <div className="app">
      <Header />
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
