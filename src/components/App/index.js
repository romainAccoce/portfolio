import './app.scss';

import Header from '../Header';
import Home from '../Home';
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Error404 from "../Error404";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
