import './projects.scss';
import { projectsDatas } from '../../selectors';

const Projects = () => {
    return (
        <div className='projects'>
            {
                projectsDatas.map((project) => (
                    <div className='projects__project-container' key={project.url}>
                        <div>
                            <img className='' src={project.image}/>
                        </div>
                        <p>{project.name}</p>
                        <p>{project.description}</p>
                        <p>{project.url}</p>
                        <p>{project.githubLink}</p>
                    </div>
                    ),
                )
            }
        </div>
    );
};

export default Projects;