import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Nexora.</div>
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
        <button className="cta-button">What we built</button>
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
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submit-button">Send Message</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TechServe. All rights reserved. sahil namdeo</p>
      </footer>
    </div>
  );
}

export default App;
