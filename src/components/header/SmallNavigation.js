import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallNavigation(props) {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div className="parent-size">
      <FontAwesomeIcon
        icon={faBars}
        className="hamburguer-menu"
        onClick={() => {
          setMenuClicked(!menuClicked);
        }}
      ></FontAwesomeIcon>
      {menuClicked ? (
        <div className="header__link-container--sm">
          <a
            href="#claims"
            activeClassName="selected"
            className="header__home--sm"
          >
            <FormattedMessage
              id="app.header.home"
              defaultMessage="Home"
            ></FormattedMessage>
          </a>
          <a
            href="#products"
            activeClassName="selected"
            className="header__home--sm"
          >
            <FormattedMessage
              id="app.header.products"
              defaultMessage="Products"
            ></FormattedMessage>
          </a>
          <a
            href="#about"
            activeClassName="selected"
            className="header__home--sm"
          >
            <FormattedMessage
              id="app.header.about"
              defaultMessage="About Us"
            ></FormattedMessage>
          </a>
          <a
            href="#contact"
            activeClassName="selected"
            className="header__home--sm"
          >
            <FormattedMessage
              id="app.header.contact"
              defaultMessage="Contact Us"
            ></FormattedMessage>
          </a>
          <div className="header__home--sm">{props.children}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
