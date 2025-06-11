import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_s3srloc', // You'll need to replace this with your EmailJS service ID
        'template_0gym1sv', // You'll need to replace this with your EmailJS template ID
        form.current,
        'awHOrTWdi9UQ1jvnq' // You'll need to replace this with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">TechServe</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <h1>Transforming Ideas into Digital Reality</h1>
        <p>We don't just build websites — we craft digital experiences that connect, inspire, and grow your brand.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with cutting-edge technologies</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Web Design</h3>
            <p>Beautiful, responsive designs that engage and convert visitors</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Native and cross-platform mobile applications</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>SEO Optimization</h3>
            <p>Improve your online visibility and reach more customers</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are a team of passionate developers and designers dedicated to delivering exceptional digital solutions. With years of experience in the industry, we help businesses thrive in the digital age.</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TechServe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
