import React from "react";
import Contact from "../Contact/Contact";
import ContactBar from "../ContactSidebar/ContactBar";
import Button from "../Utils/Button";

export default function Ads() {
  return (
    <div className="ads">
      <div className="add-container">
        <div className="add-contact-container">
          <Contact />
          <div className="ads-list">
            <ul>
              <li>
                <a href="">
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button/>
      <ContactBar/>
    </div>
  );
}
