import React from 'react';
import './App.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-first">
        <div className="footer">
          <div className="footer-column">
            <h4>About</h4>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Flipkart Stories</a>
            <a href="#">Press</a>
            <a href="#">Corporate Information</a>
          </div>
          <div className="footer-column">
            <h4>Group Companies</h4>
            <a href="#">Myntra</a>
            <a href="#">Cleartrip</a>
            <a href="#">Shopsy</a>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-column">
            <h4>Consumer Policy</h4>
            <a href="#">Cancellation & Returns</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">Grievance Redressal</a>
            <a href="#">EPR Compliance</a>
          </div>
          <div className="footer-column">
            <h4>Mail Us:</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
            <h4>Social:</h4>
          </div>
          <div className="footer-column">
            <h4>Registered Office Address:</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India<br /><br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: <span style={{ color: '#4fa1ff' }}>044-45614700 / 044-67415800</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <div>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
                alt="Become a Seller"
              />
              <p>Become a Seller</p>
            </div>
            <div>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
                alt="Advertise"
              />
              <p>Advertise</p>
            </div>
            <div>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
                alt="Gift Cards"
              />
              <p>Gift Cards</p>
            </div>
            <div>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
                alt="Help Center"
              />
              <p>Help Center</p>
            </div>
            <p>@ 2007-2025 Flipkart.com</p>
          </div>
          <div className="payment-icons">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              alt="Payment Methods"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
