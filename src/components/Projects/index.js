import './projects.scss';
import { projectsDatas } from '../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCard } from '../../actions/displayOptions';
import Tag from '../Tag';
import Button from '../Button';

const Projects = () => {

    const dispatch = useDispatch();
    const { currentCard } = useSelector((state) => state.displayOptions);

    return (
        <div className='projects' id='projects'>
            <div className='projects__page-title'>
                <h2 className='projects__page-title__text'>My work</h2>
            </div>
            {
                projectsDatas.map((project) => (
                    <div className='projects__project-card' key={project.url} onMouseOver={() => dispatch(setCurrentCard(project.name))} onMouseLeave={() => dispatch(setCurrentCard(""))}>
                        <img alt='project image' className={ currentCard === project.name ? 'projects__project-card__image projects__project-card__image--current' : 'projects__project-card__image'} src={project.image}/>
                        <div className='projects__project-card__content'>
                            <h3 className='projects__project-card__content__title'>{project.name}</h3>
                            <div className='projects__project-card__content__techs'>
                                {
                                    project.techs.map((tech) => (
                                        <Tag tech={tech}/>
                                    ))
                                }
                            </div>
                            <p className='projects__project-card__content__description'>{project.description}</p>
                            <div className='projects__project-card__content__links'>
                                <Button name="Go to website" link={project.url} dark={true}/>
                                <a className='projects__project-card__content__links__github' href={project.githubLink}>Source code</a>
                            </div>
                        </div>
                    </div>
                    ),
                )
            }
        </div>
    );
};

export default Projects;