import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Message sent:', data);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Name"
        type="text"
        {...register('name')}
        className="form-input"
      />

      <input
        placeholder="Email"
        type="text"
        {...register('email', {
          required: 'Email required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Wrong e-mail',
          },
        })}
        className="form-input"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        placeholder="Phone"
        type="tel"
        {...register('phone')}
        className="form-input"
      />

      <textarea
        placeholder="Message"
        {...register('message')}
        className="form-input"
      />

      <button className="submit-button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
