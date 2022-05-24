
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
          dispatch(setDisplaySuccessModal('An error occurred, please try again!'));

      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input className='form__input form__input__name' type="text" name="user_name" placeholder='Name' required/>
      <input className='form__input form__input__email' type="email" name="user_email" placeholder='Email' required />
      <input className='form__input form__input__subject' type="text" name="subject" placeholder='Subject' />
      <textarea className='form__input form__input__message' name="message" placeholder='Message' required />
      <input className='form__submit button' type="submit" value="Send message" />
    </form>
  );
};

export default ContactForm;