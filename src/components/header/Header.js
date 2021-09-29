import React from "react";
import { FormattedMessage } from "react-intl";
export default function Header(props) {
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
          <FormattedMessage
            id="app.header.products"
            defaultMessage="Products"
          ></FormattedMessage>
        </a>
        <a
          href="#about"
          activeClassName="selected"
          className="header__home--base"
        >
          <FormattedMessage
            id="app.header.about"
            defaultMessage="About Us"
          ></FormattedMessage>
        </a>
        <a
          href="#contact"
          activeClassName="selected"
          className="header__home--base"
        >
          <FormattedMessage
            id="app.header.contact"
            defaultMessage="Contact Us"
          ></FormattedMessage>
        </a>
        {props.children}
      </div>
    </div>
  );
}
