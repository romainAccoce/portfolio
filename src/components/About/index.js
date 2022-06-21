import './about.scss';
import Image from '../../assets/images/photo1.png';

const About = () => {

    return (
        <div className='about'id='about'>
            <div className='about__content' >
                <h2 data-aos="fade-up" className='about__content__title'>My journey so far</h2>
                <p className='about__content__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt quae exercitationem non! Qui natus alias earum dolores nisi doloremque, blanditiis quae, ipsum aperiam assumenda aliquid omnis pariatur, aspernatur quasi minima?</p>
                <p className='about__content__text'>Facere earum excepturi laboriosam suscipit doloremque, quam dignissimos? Sed ratione suscipit voluptatum sunt, perspiciatis mollitia id repellat incidunt. Laborum!</p>
                <p className='about__content__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt quae exercitationem non! Qui natus alias earum dolores nisi doloremque, blanditiis quae, ipsum aperiam assumenda aliquid omnis pariatur, aspernatur quasi minima?</p>
            </div>
            <img className='about__image' src={Image}/>
        </div>
    );
};

export default About;