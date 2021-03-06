import './projects.scss';
import { projectsDatas } from '../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCard } from '../../actions/displayOptions';
import Tag from '../Tag';
import Button from '../Button';

const Projects = () => {

    const dispatch = useDispatch();
    const { currentCard } = useSelector((state) => state.displayOptions);

    const handleTouchStart = (project) => {
        if (currentCard !== project.name) {
            dispatch(setCurrentCard(project.name));
        } else if (currentCard === project.name) {
            dispatch(setCurrentCard(""));
        } else {
            dispatch(setCurrentCard(currentCard));
        }
    }

    const handleTouchMove = (project) => {
        if (!currentCard) {
            return
        } else if (currentCard !== project.name) {
            dispatch(setCurrentCard(""));
        } else {
            dispatch(setCurrentCard(currentCard));
        }
    }

    return (
        <div className='projects' id='projects'>
            <h2 data-aos='fade-right' className='projects__title'>My work</h2>
            <div  className='projects__container'>
            {
                projectsDatas.map((project, index) => (
                    <div 
                        data-aos='zoom-in-up' 
                        data-aos-delay={300 * index}
                        className='projects__container__project-card'
                        key={project.url}
                        onMouseEnter={() => dispatch(setCurrentCard(project.name))}
                        onMouseLeave={() => dispatch(setCurrentCard(""))}
                        onTouchStart={() => handleTouchStart(project)}
                        onTouchMove={() => handleTouchMove(project)}
                    >
                        <img alt='project image' className={ currentCard === project.name ? 'projects__container__project-card__image projects__container__project-card__image--current' : 'projects__container__project-card__image'} src={project.image}/>
                        <div className='projects__container__project-card__content'>
                            <h3 className='projects__container__project-card__content__title'>{project.name}</h3>
                            <div className='projects__container__project-card__content__techs'>
                                {
                                    project.techs.map((tech) => (
                                        <Tag tech={tech} key={tech}/>
                                    ))
                                }
                            </div>
                            <p className='projects__container__project-card__content__description'>{project.description}</p>
                            <div className='projects__container__project-card__content__links'>
                                <a className='button' href={project.url} target="_blank" >
                                    Go to website
                                </a>
                                <a className='projects__container__project-card__content__links__github' href={project.githubLink} target="_blank">Source code</a>
                            </div>
                        </div>
                    </div>
                    ),
                )
            }
            </div>
        </div>
    );
};

export default Projects;