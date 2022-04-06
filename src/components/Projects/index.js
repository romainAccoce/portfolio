import './projects.scss';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { projectsDatas } from '../../selectors';

const Projects = () => {
    return (
        <div className='projects'>
            {
                projectsDatas.map((project) => (
                    <div className='projects__project-container' key={project.url}>
                        <LinkPreview url={project.url} width='400px' />;
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