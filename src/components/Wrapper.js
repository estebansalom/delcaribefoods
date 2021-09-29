import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../lang/es-ES.json";
import English from "../lang/en-US.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "es-ES") {
  lang = Spanish;
} else {
  lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "es-ES") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
