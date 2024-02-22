import React from 'react';
import "./Footor.css";
const footor = () => 
{
  return(
    <div className='homepage'>
    <div className="group-child4" />
    <b className="connect-us">Connect Us</b>
    <b className="manage">Manage</b>
    <b className="information">Information</b>
    <div className="about">-About</div>
    <div className="help-center">-Help Center</div>
    <div className="career">-Career</div>
    <div className="contact-us">-Contact Us</div>
    <div className="account-parent">
      <div className="account">-Account</div>
      <div className="buy-gift-card">-Buy Gift Card</div>
      <div className="redeem-gift-card">-Redeem Gift Card</div>
      <div className="manage-account">-Manage Account</div>
    </div>
    <div className="privacy-parent">
      <div className="privacy">-Privacy</div>
      <div className="cookies">-Cookies</div>
      <div className="faq">-FAQ</div>
      <div className="terms-condition">{`-Terms & Condition`}</div>
    </div>
    </div>
);
};
export default footor;