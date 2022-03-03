import React from 'react';
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <img className="person" src="" alt="" />
        <div className="person-info">
          <h2>oussama Ben</h2>
          <h3>full-stack Dev</h3>
          <small>oussama.com</small>
        </div>
        <div className="btn-container">
          <a href="#index.html" className="email-btn">

          Email
          </a>
          <a href="#index.html" className="linkedin-btn">
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <div className="about-content">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interests-content">
          <h3>About</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <div className="social-icons">
          <a href="#index.html" className="social-icon">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#index.html" className="social-icon">
            {/* <i class="fa-brands fa-facebook"></i> */}
          </a>
          <a href="#index.html" className="social-icon">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#index.html" className="social-icon">
            <i class="fa-brands fa-github-square"></i>
          </a>

        </div>
      </div>
    </div>
  );

}