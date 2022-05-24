import './contact.scss';
import { useSelector } from 'react-redux';
import SuccessModal from '../SuccessModal';
import Map from '../Map';
import ContactForm from '../ContactForm';

const Contact = () => {
    const { displaySuccessModal } = useSelector((state) => state.displayOptions);
    return (
        <div className='contact'>
            <div className='contact__content'>
                <h2 className='contact__content__title'>Contact me</h2>
                <p className='contact__content__text'>I’m interested in freelance opportunities, if you have any request or question, don’t hesitate to use the form. </p>
                <ContactForm />
                { displaySuccessModal && <SuccessModal /> }
            </div>
            <div className='contact__map'>
                <Map />
            </div>
        </div>
    );
};

export default Contact;