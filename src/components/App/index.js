import { Routes, Route } from "react-router-dom";

import './app.scss';

import Header from '../Header';
import Home from '../Home';
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Error404 from "../Error404";
import Footer from '../Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
