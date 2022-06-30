import './contact.scss';
import { useSelector } from 'react-redux';
import SuccessModal from '../SuccessModal';
import Map from '../Map';
import ContactForm from '../ContactForm';

const Contact = () => {
    const { displaySuccessModal } = useSelector((state) => state.displayOptions);
    return (
        <div className='contact' id='contact'>
            <div className='contact__content'>
                <h2 data-aos="fade-right" className='contact__content__title'>Contact me</h2>
                <p data-aos="fade-up" className='contact__content__text'>I’m interested in professional opportunities, if you have any request or question, don’t hesitate to use the form. </p>
                <ContactForm />
            </div>
            <div className='contact__map'>
                <Map />
            </div>
            { displaySuccessModal && <SuccessModal /> }
        </div>
    );
};

export default Contact;