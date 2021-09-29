import React from "react";
import { FormattedMessage } from "react-intl";

export default function LargeNavigation(props) {
  return (
    <div className="header__link-container--base">
      <a
        href="#claims"
        activeClassName="selected"
        className="header__home--base"
      >
        <FormattedMessage
          id="app.header.home"
          defaultMessage="Home"
        ></FormattedMessage>
      </a>
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
  );
}
