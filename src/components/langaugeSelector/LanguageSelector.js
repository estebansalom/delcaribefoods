import React from "react";
import { Context } from "../Wrapper";
import { useContext } from "react";

export default function LanguageSelector() {
  const context = useContext(Context);
  return (
    <div className="header__select-container--base">
      <select
        className="header__select--base"
        value={context.locale}
        onChange={context.selectLanguage}
      >
        <option className="header__select-item--base" value="en-US">
          English
        </option>
        <option value="es-ES">Español</option>
      </select>
    </div>
  );
}
