import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="topFooter">
        <h1>Follow Us</h1>
        <p>Join us & save more on your favourite products.</p>
        <hr />
        <div className="footerSocialMedia">
          <button className="footerFB">
            <FaFacebookF />
            Facebook
          </button>
          <button className="footerTW">
            <FaTwitter />
            Twitter
          </button>
          <button className="footerIG">
            <FaInstagram />
            Instgram
          </button>
          <button className="footerPN">
            <FaPinterestP />
            Pinterest
          </button>
        </div>
      </div>
      <div className="brandsFooter">
        <h5>SHOP WITHOUT WORRY</h5>
        <img
          src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/home-page/shop-without-worry/shop-without-worry-pcj1.jpg"
          alt=""
        />
      </div>
      <div className="midFooter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="storeIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <div>
          <h4>PCJ STORE LOCATOR</h4>
          <h6>Find Store</h6>
        </div>
      </div>
      <div className="bottomFooter">
        <div>
          <h5>OVERVIEW</h5>
          <p>Collections</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Digital Gold</p>
          <p>FAQs</p>
        </div>
        <div>
          <h5>OUR POLICIES</h5>
          <p>ICICI Cashback offer t&c</p>
          <p>Return & Exchange Policy</p>
          <p>Cancellation Policy</p>
          <p>Buyback Policy</p>
          <p>Shipping Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h5>CUSTOMER DELIGHT</h5>
          <p>Track Your Order</p>
          <p>Best Prices Assurance</p>
          <p>Jewellery Makeover</p>
        </div>
        <div>
          <h5>EDUCATION</h5>
          <p>Diamond Education</p>
          <p>Metal Guide</p>
          <p>Setting Guide</p>
        </div>
        <div>
          <h5>GET IN TOUCH</h5>
          <p>1234-567-8910(Toll Free)</p>
          <p>99999191919(WhatsApp)</p>
          <p>(10am-6pm IST,MON - SAT)</p>
          <p>getintouch@webjeweller.com</p>
          <p>Corporate Gifting</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
