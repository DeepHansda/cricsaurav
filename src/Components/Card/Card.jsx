import React from "react";
import "./card.css";
import img from "./20190320_162523-696x353.jpg";
export default function Card() {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-title">
          <h2>
            <span>#1.</span> Dream11
          </h2>
        </div>
        <div className="card-img">
          <img src={img} alt="dream11" />
        </div>
        <div className="card-inner-container">
          <div className="card-description-container">
            <div className="card-description-main">
              <p>
                Dream 11 is one of the oldest apps in the Fantasy Cricket world.
                Dream11 has the most traffic of fantasy cricket players. This
                app gives you a sign-up bonus of Rs 100 and Rs 100 on referring
                your friend. You can withdraw all the winning amount in your
                Bank account after completing the KYC.
              </p>
            </div>

            <div className="card-description-additional">
              <p>Dream11 Is Listed As No.1 Fantasy Cricket Apps In India</p>
            </div>
          </div>

          <div className="card-features-container">
            <div className="card-features-title">
              <h4>App Features</h4>
            </div>
            <ul className="features-list">
              <li>
                <p>GMNG Referral Code: IHD</p>
              </li>
              <li>
                <p>GMNG Referral Code: IHD</p>
              </li>
              <li>
                <p>GMNG Referral Code: IHD</p>
              </li>
              <li>
                <p>GMNG Referral Code: IHD</p>
              </li>
              <li>
                <p>GMNG Referral Code: IHD</p>
              </li>
            </ul>
          </div>

          <div className="card-list-container">
            <ul className="card-list">
              <li>
                <h4>Dream11 Referral Code: </h4>
                <p>WELCOME100</p>
              </li>
              <li>
                <h4>Dream11 Sign-up Bonus: </h4>
                <p>Rs.100</p>
              </li>
              <li>
                <h4>Refer Bonus: </h4>
                <p>Rs.100</p>
              </li>
              <li>
                <h4>Minimum Withdrawable Amount: </h4>
                <p>Rs.100</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-button">
          <a href="">
            <button>download app</button>
          </a>
        </div>
      </div>
    </div>
  );
}
