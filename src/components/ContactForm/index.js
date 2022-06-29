
import './contact-form.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplaySuccessModal } from '../../actions/displayOptions';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const dispatch = useDispatch();
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID, process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_MAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          dispatch(setDisplaySuccessModal('Thank you for your message!'));
      }, (error) => {
          console.log(error.text);
          dispatch(setDisplaySuccessModal('An error occurred, please try again later!'));

      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input data-aos="fade-up" data-aos-delay={100} className='form__input form__input__name' type="text" name="user_name" placeholder='Name' required/>
      <input data-aos="fade-up" data-aos-delay={200} className='form__input form__input__email' type="email" name="user_email" placeholder='Email' required />
      <input data-aos="fade-up" data-aos-delay={300}  className='form__input form__input__subject' type="text" name="subject" placeholder='Subject' required />
      <textarea data-aos="fade-up" data-aos-delay={400}  className='form__input form__input__message' name="message" placeholder='Message' required />
      <div data-aos="fade-up" data-aos-delay={500}>
        <input className='form__submit button' type="submit" value="Send message" />
      </div>
    </form>
  );
};

export default ContactForm;