import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="moving-image"></div>
      <div className="newsletter">
        <div className="newsletter-left">
          <h2>Subscribe Newsletter</h2>
          <p>Get the Latest Updates on Quick Medical Deliveries, Exclusive Offers, and Health Tips Straight to Your Inbox.</p>
        </div>
        <div className="newsletter-right">
          <div className="subscribe-form">
            <input type="email" placeholder="Enter email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="left-links">
          <h2>Home</h2>
          <a href="/terms">Contact Us</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="right-links">
          <h2>Download Now</h2>
          <div className="app-store-links">
            <div className="store">
              <a href="https://play.google.com/store">
                <img src="https://static.vecteezy.com/system/resources/previews/022/613/026/original/google-play-store-icon-logo-symbol-free-png.png" alt="Google Play" />
              </a>
              <div className="store-side">
                <div className="store-top">GET IT ON</div>
                <div className="store-bottom">Google Play</div>
              </div>
            </div>
            <div className="store">
              <a href="https://www.apple.com/app-store/">
                <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-how-setup-for-ios-development-11.png" alt="App Store" />
              </a>
              <div className="store-side">
                <div className="store-top">GET IT ON</div>
                <div className="store-bottom">Apple Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <p>Connect with us on social media for updates, offers, and more!</p>
        <div className="social-icons">
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com"><i className="fab fa-x"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.medium.com"><i className="fab fa-medium"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Turantlo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
