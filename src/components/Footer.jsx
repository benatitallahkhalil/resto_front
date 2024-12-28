import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import "@fortawesome/fontawesome-free/css/all.css";
const Footer = () => {
  useEffect(() => {
    // Set the current year in the footer
    const year = new Date().getFullYear();
    document.getElementById("displayYear").innerText = year;
  }, []);

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                <i class="fa-solid fa-location-dot"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                <i class="fa-solid fa-phone"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                <i class="fa-solid fa-envelope"></i>
                  <span>khalilbenatitallah@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">
                Feane
              </a>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with others.
              </p>
              <div className="footer_social">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">

                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">

                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-pinterest"></i>
                 
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            © <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/" target="_blank" rel="noopener noreferrer">Free Html Templates</a>
            <br />
            <br />
            © <span id="displayYear"></span> Distributed By
            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
