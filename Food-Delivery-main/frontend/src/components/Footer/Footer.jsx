import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Logo image hata kar CraveCart ka text logo laga diya */}
          <h1 style={{ color: '#fc8019', fontSize: '35px', fontWeight: 'bold', marginBottom: '20px', marginTop: '0' }}>CraveCart.</h1>
          <p>
            CraveCart is your ultimate food destination. We bring the best dishes from top restaurants straight to your doorstep. Crave it, order it, enjoy it! Experience the joy of delicious meals crafted with love and delivered with care.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-98765-43210</li> {/* Ek dummy Indian format number */}
            <li>contact@cravecart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 © CraveCart.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;