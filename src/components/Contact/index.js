import './contact.scss';
import Map from '../Map';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__content'>
                <h2 className='contact__content__title'>Contact me</h2>
            </div>
            <div className='contact__map'>
                <Map />
            </div>
        </div>
    );
};

export default Contact;