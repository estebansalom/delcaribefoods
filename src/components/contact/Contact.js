import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationArrow,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FormattedMessage } from "react-intl";
const initialState = {
  name: "",
  email: "",
  message: "",
};
const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_8c1lwob",
        "template_jrslrz7",
        e.target,
        "user_Z5HFzKBGbgXYOTDVKNKRk"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h2>
        <FormattedMessage
          id="app.contact.title"
          defaultMessage="Contact Us"
        ></FormattedMessage>
      </h2>
      <div className="row">
        <div className="contact__main--base">
          <div className="contact__title--base">
            <p>
              <FormattedMessage
                id="app.contact.description"
                defaultMessage="Please fill out the form below using detailed information and one of our associates will be contacting you as soon as posible."
              ></FormattedMessage>
            </p>
          </div>
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="row contact__input-row--base">
              <div className="form-group contact__input--base">
                <label htmlFor="name">
                  <FormattedMessage
                    id="app.contact.name"
                    defaultMessage="Name"
                  ></FormattedMessage>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group contact__input--base">
                <label htmlFor="email">
                  <FormattedMessage
                    id="app.contact.email"
                    defaultMessage="Email"
                  ></FormattedMessage>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">
                <FormattedMessage
                  id="app.contact.message"
                  defaultMessage="Message"
                ></FormattedMessage>
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="6"
                required
                onChange={handleChange}
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn-custom contact__button--base">
              <FormattedMessage
                id="app.contact.button"
                defaultMessage="Send Message"
              ></FormattedMessage>
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>
              <FormattedMessage
                id="app.contact.info.title"
                defaultMessage="Contact Information"
              ></FormattedMessage>
            </h3>
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa"
                ></FontAwesomeIcon>{" "}
                <FormattedMessage
                  id="app.contact.address"
                  defaultMessage="Address"
                ></FormattedMessage>
              </span>
              {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fa fa-phone"
                ></FontAwesomeIcon>{" "}
                <FormattedMessage
                  id="app.contact.phone"
                  defaultMessage="Phone"
                ></FormattedMessage>
              </span>{" "}
              {props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="fa fa-envelope-o"
                ></FontAwesomeIcon>{" "}
                <FormattedMessage
                  id="app.contact.email"
                  defaultMessage="Email"
                ></FormattedMessage>
              </span>{" "}
              <a href="mailto:max.cruz@delcaribefoodscr.com">
                {props.data ? props.data.email : "loading"}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="social">
          <ul>
            <li>
              <a target="_blank" href={props.data ? props.data.facebook : "/"}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fa"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a target="_blank" href={props.data ? props.data.whatsapp : "/"}>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="fa"
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
