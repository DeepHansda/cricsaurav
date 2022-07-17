import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <div className="contact">
        <div className="contact-title">
            <p>get notified</p>
        </div>
      <div className="contact-form">
        <form className="main-form">
          <div className="form-name-container">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-email-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="form-button-container">
            <button type="submit" className="btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
