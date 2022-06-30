import './about.scss';
import Image from '../../assets/images/photo5.jpg';

const About = () => {

    return (
        <div className='about'id='about'>
            <div className='about__content' >
                <h2 data-aos="fade-right" className='about__content__title'>My journey so far</h2>
                <p data-aos="fade-up" className='about__content__text'>After several years oparating in Human Ressources, my last experiences in tech oriented environnements, especially in talent aquisition management, made me want to be a part of projects developpement more concretely.</p>
                <p data-aos="fade-up" className='about__content__text'>My natural taste and ability for solving problems and results optimisation pushed me to start a professional retraining in web development.</p>
                <p data-aos="fade-up" className='about__content__text'>I started a six months fullstack Javascript developer formation in O'clock school, where I have learned the fondamentals of Javascript development on both client and server side before I chose the front end React specialisation. Today, I seek on every oportunity to sharpen my skills by team collaboration on ambitious projects.</p>
            </div>
            <img data-aos="flip-right" className='about__image' src={Image}/>
        </div>
    );
};

export default About;