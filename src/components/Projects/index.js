import "./projects.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCard } from "../../actions/displayOptions";
import Button from "../Button";
import Tag from "../Tag";

const Projects = () => {
  const dispatch = useDispatch();
  const { currentCard, projects } = useSelector(
    (state) => state.displayOptions
  );

  const handleTouchStart = (project) => {
    if (currentCard !== project.name) {
      dispatch(setCurrentCard(project.name));
    } else if (currentCard === project.name) {
      dispatch(setCurrentCard(""));
    } else {
      dispatch(setCurrentCard(currentCard));
    }
  };

  const handleTouchMove = (project) => {
    if (!currentCard) {
      return;
    } else if (currentCard !== project.name) {
      dispatch(setCurrentCard(""));
    } else {
      dispatch(setCurrentCard(currentCard));
    }
  };

  return (
    <div className="projects">
      <h2 data-aos="fade-right" className="projects__title" id="projects">
        My work
      </h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div
            data-aos="zoom-in-up"
            data-aos-delay={300 * index}
            className="projects__container__project-card"
            key={project.attributes.name}
            onMouseEnter={() =>
              dispatch(setCurrentCard(project.attributes.name))
            }
            onMouseLeave={() => dispatch(setCurrentCard(""))}
            onTouchStart={() => handleTouchStart(project)}
            onTouchMove={() => handleTouchMove(project)}
          >
            <img
              alt=""
              className={
                currentCard === project.attributes.name
                  ? "projects__container__project-card__image projects__container__project-card__image--current"
                  : "projects__container__project-card__image"
              }
              src={project.attributes.image.data.attributes.url}
            />
            <div className="projects__container__project-card__content">
              <h3 className="projects__container__project-card__content__title">
                {project.attributes.name}
              </h3>
              <div className="projects__container__project-card__content__techs">
                {project.attributes.techs.front.map((tech) => (
                  <Tag tech={tech} key={tech} />
                ))}
              </div>
              <p className="projects__container__project-card__content__description">
                {project.attributes.description}
              </p>
              <div className="projects__container__project-card__content__links">
                <Button name="Go to website" link={project.attributes.url} />
                <a
                  className="projects__container__project-card__content__links__github"
                  href={project.attributes.githubLink}
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
