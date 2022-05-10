import './about.scss';
import Image from '../../assets/images/photo1.png';

const About = () => {
    return (
        <div className='about'>
            <div className='about__title'>About me</div>
            <div className='about__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt quae exercitationem non! Qui natus alias earum dolores nisi doloremque, blanditiis quae, ipsum aperiam assumenda aliquid omnis pariatur, aspernatur quasi minima? Facere earum excepturi laboriosam suscipit doloremque, quam dignissimos? Sed ratione suscipit voluptatum sunt, perspiciatis mollitia id repellat incidunt. Laborum!</div>
            <img className='about__image' src={Image}/>
        </div>
    );
};

export default About;