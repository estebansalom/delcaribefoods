import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useWindowWidthAndHeight } from "../../hooks/customhooks";
import LanguageSelector from "../langaugeSelector/LanguageSelector";
import LargeNavigation from "./LargeNavigation";
import SmallNavigation from "./SmallNavigation";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header(props) {
  const [width, height] = useWindowWidthAndHeight();
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
      {width > 1000 ? (
        <LargeNavigation>
          <LanguageSelector></LanguageSelector>
        </LargeNavigation>
      ) : (
        <SmallNavigation>
          <LanguageSelector></LanguageSelector>
        </SmallNavigation>
      )}
    </div>
  );
}
