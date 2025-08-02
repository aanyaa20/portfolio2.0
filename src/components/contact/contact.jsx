import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fgr50ck',           // ✅ Your service ID
      'template_i4945sr',          // ✅ Your template ID
      form.current,
      'xi9cPDZdJp7peP2JI'          // ✅ Your public key
    ).then(
      () => {
        alert('Message sent!');
      },
      (error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message: ' + error.text);
      }
    );
  };

  return (
    <section id='contact'>
      <h2 className='contactTitle'>Contact Me</h2>
      <span className='contactDesc'>Interested in working together? Feel free to drop a message.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" rows="5" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
