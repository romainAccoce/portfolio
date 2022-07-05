
import './contact-form.scss';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import { setDisplaySuccessModal } from '../../actions/displayOptions';
import { changeFormField, resetFormFields } from '../../actions/contactFormFields';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const dispatch = useDispatch();
  const { name, email, subject, message } = useSelector((state) => state.contactFormFields);
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID, process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_MAIL_PUBLIC_KEY)
      .then((result) => {
          dispatch(resetFormFields());
          dispatch(setDisplaySuccessModal('Thank you for your message!'));
      }, (error) => {
          dispatch(setDisplaySuccessModal('An error occurred, please try again later!'));
      });
  };

  return (
    <form 
      id='form'
      className='form' 
      ref={form}
      onSubmit={sendEmail}
      data-aos='fade-up'
      data-aos-delay={100}
    >
      <div className='form__first-line'>
        <input 
          className='form__first-line__input'
          value={name}
          type='text'
          name='user_name'
          placeholder='Name'
          onChange={(event) => dispatch(changeFormField(event.target.value, 'name'))}
          required
        />
        <input
          className='form__first-line__input'
          value={email}
          type='email'
          name='user_email'
          placeholder='Email'
          onChange={(event) => dispatch(changeFormField(event.target.value, 'email'))}
          required
        />
      </div>
      <input
        className='form__input form__input__subject'
        value={subject}
        type='text'
        name='subject'
        placeholder='Subject'
        onChange={(event) => dispatch(changeFormField(event.target.value, 'subject'))}
        required
      />
      <textarea
        className='form__input form__input__message'
        value={message}
        name='message'
        placeholder='Message'
        onChange={(event) => dispatch(changeFormField(event.target.value, 'message'))}
        required
      />
      <div>
        <input className='form__submit button' type='submit' value='Send message' />
      </div>
    </form>
  );
};

export default ContactForm;