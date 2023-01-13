import { useState } from 'react';
import LanguageModal from './Footer-comps/LanguageModal';
import FooterBottom from './FooterBottom/Footer-bottom'
import './Footer.css';

function Footer() {
  const [languageHover, setLanguageHover] = useState(false);

  // for modal placement
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);

  function handleLanguageHover(e) {
    let box = e.target.getBoundingClientRect();
    setBottom(box.top + window.pageYOffset + 15);
    setLeft(box.right - 128);
    setLanguageHover(true);
  }

  function toTop() {
    document.body.scrollTop = 0; // For safari... who even uses safari?
    document.documentElement.scrollTop = 0; // For every other normal human browser.
  }

  return (
    <div className="container">
      <div className="back-to-top" onClick={toTop}>
        Back To Top
      </div>
      <div className="upper-footer">
        <div className="row">
          <div className="col">
            <p className="col-header">Get to know us</p>
            <span className="footerSpan">Careers</span>
            <span className="footerSpan">Amazon Newsletter</span>
            <span className="footerSpan">About Amazon</span>
            <span className="footerSpan">Sustainability</span>
            <span className="footerSpan">Press Center</span>
            <span className="footerSpan">Investor Relations</span>
            <span className="footerSpan">Amazon Devices</span>
            <span className="footerSpan">Amazon Science</span>
          </div>
          <div className="col-space-between"></div>
          <div className="col">
            <p className="col-header">Make Money with Us</p>
            <span className="footerSpan">Sell Products on Amazon</span>
            <span className="footerSpan">Sell apps on Amazon</span>
            <span className="footerSpan">Supply to Amazon</span>
            <span className="footerSpan">Protect & Build your Brand</span>
            <span className="footerSpan">Become an Affiliate</span>
            <span className="footerSpan">Become a Delivery Driver</span>
            <span className="footerSpan">Start a package delivery business</span>
            <span className="footerSpan">Advertise your Products</span>
            <span className="footerSpan">Self Publish with us</span>
            <span className="footerSpan">Host an Amazon Hub</span>
            <span className="footerSpan">See More Ways to Make Money</span>
          </div>
          <div className="col-space-between"></div>
          <div className="col">
            <p className="col-header">Amazon Payment Products</p>
            <span className="footerSpan">Amazon Rewards Visa Signiture Cards</span>
            <span className="footerSpan">Amazon Store Card</span>
            <span className="footerSpan">Amazon Secured Card</span>
            <span className="footerSpan">Amazon Business Card</span>
            <span className="footerSpan">Shop with Points</span>
            <span className="footerSpan">Credit Card Marketplace</span>
            <span className="footerSpan">Reload Your Balance</span>
            <span className="footerSpan">Amazon Currency Converter</span>
          </div>
          <div className="col-space-between"></div>
          <div className="col">
            <p className="col-header">Let Us Help You</p>
            <span className="footerSpan">Amazon and Covid 19</span>
            <span className="footerSpan">Your Account</span>
            <span className="footerSpan">Your Orders</span>
            <span className="footerSpan">Shipping Rates & Policies</span>
            <span className="footerSpan">Amazon Prime</span>
            <span className="footerSpan">Returns & Replacements</span>
            <span className="footerSpan">Manage Your Content and Devices</span>
            <span className="footerSpan">Your Recalls and Product Safety Alerts</span>
            <span className="footerSpan">Amazon Assistant</span>
            <span className="footerSpan">Help</span>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="mid-footer">
        <div className="amazon-logo"></div>
        <div
          className="language-select-outer"
          onMouseEnter={(e) => handleLanguageHover(e)}
          onMouseLeave={() => setLanguageHover(false)}
        >
          <div className="language-select">
            <div className="nav-globe"></div>
            <div className="current-language">English</div>
            <div className="up-down"></div>
          </div>
          {languageHover && <LanguageModal bottom={bottom} left={left} />}
        </div>
        <div className="country-select">
          <div className="flag"></div>
          <div className="current-country">United States</div>
        </div>
      </div>
      <div className="footer-bottom">
      <FooterBottom/>
      </div>
    </div>
  );
}

export default Footer;
