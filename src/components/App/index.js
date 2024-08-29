import "./app.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjects } from "../../actions/displayOptions";
import AOS from "aos";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import BackToTopButton from "../BackToTopButton";
import axios from "axios";
import { apiConfig } from "../../selectors";

const App = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.displayOptions);

  const getProjectssData = () => {
    axios
      .get(
        "https://strapi-production-1558.up.railway.app/api/projects?populate=*",
        apiConfig.config
      )
      .then((data) => dispatch(setProjects(data.data.data)))
      .catch((error) => console.log(error));
  };

  getProjectssData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={!darkMode ? "app" : "app app--darkmode"}>
      <Header />
      <BackToTopButton />
      <div className="app__sections">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
