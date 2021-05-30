import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="row header__container--base">
      <div className="header__home-container--base">
        <a
          href="#page-top"
          activeClassName="selected"
          className="header__home--base"
        >
          <img className="header__logo--base" src="/img/logo-claro.png"></img>
        </a>
      </div>
      <div className="header__link-container--base">
        <a
          href="#products"
          activeClassName="selected"
          className="header__home--base"
        >
          Products
        </a>
        <a
          href="#about"
          activeClassName="selected"
          className="header__home--base"
        >
          About Us
        </a>
        <a
          href="#contact"
          activeClassName="selected"
          className="header__home--base"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
