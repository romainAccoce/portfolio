import './contact.scss';
import Map from '../Map';
import ContactForm from '../ContactForm';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__content'>
                <h2 className='contact__content__title'>Contact me</h2>
                <ContactForm />
            </div>
            <div className='contact__map'>
                <Map />
            </div>
        </div>
    );
};

export default Contact;