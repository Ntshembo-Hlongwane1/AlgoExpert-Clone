import React, { FC } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../StyleSheet/Header.css";
import Logo from "../assets/atom.svg";
import CreditCardIcon from "../assets/card.svg";

const Header: FC = () => {
  const currentURL = window.location.href;

  return (
    <div className="Header">
      <div className="Header__top">
        <div className="top__left">
          <div className="left__top">
            <img src={Logo} alt="AlgoExpert Logo" className="Logo" />
            <h3 className="Header-brand-name">AlgoExpert</h3>
          </div>
          <div className="left__bottom">
            <h5 className="sub-heading">Ace the technical interviews</h5>
          </div>
        </div>
        <div className="top__center">
          <h4
            className={`nav-lins ${
              currentURL === "http://localhost:3000/"
                ? "current_location"
                : null
            }`}
          >
            What is AlgoExpert
          </h4>
          <h4 className="nav-lins">What is SystemExpert</h4>
          <h4 className="nav-lins">Content</h4>
          <h4 className="nav-lins">Meet the Team</h4>
          <h4 className="nav-lins">Purchase</h4>
        </div>
        <div className="top__right">
          <Avatar src="" alt="User Profile" />
        </div>
      </div>
      <div className="Header__bottom">
        <h2 className="bottom__header">AlgoExpert</h2>
        <div className="bottom__content">
          <p className="bottom__content-text">
            The ultimate resource to prepare for coding interviews. Everything
            you need, in one streamlined platform.
          </p>
        </div>
        <button className="btn btn-buy-alogoExpert">Buy AlgoExpert</button>
      </div>
    </div>
  );
};

export default Header;
