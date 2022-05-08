import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qmon73', 'template_m503csr', form.current, 'aNnHV4YC9X4QT-GrF')
      .then((result) => {
          alert('Your message has been sent successfully')
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <form className='max-w-50 p-4 shadow-sm card-bg m-3' ref={form} onSubmit={sendEmail}>
            <div className="heading-light my-3">
              <h5 className='text-center'><span>Contact</span> us</h5>
            </div>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        </div>
    );
};

export default ContactUs;