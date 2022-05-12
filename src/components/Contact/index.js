import './contact.scss';
import Map from '../Map';
import ContactForm from '../ContactForm';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__content'>
                <h2 className='contact__content__title'>Contact me</h2>
                <p className='contact__content__text'>I’m interested in freelance opportunities, especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form. </p>
                <ContactForm />
            </div>
            <div className='contact__map'>
                <Map />
            </div>
        </div>
    );
};

export default Contact;