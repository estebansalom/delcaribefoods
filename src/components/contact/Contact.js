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
      <h2>Contáctenos</h2>
      <div className="row">
        <div className="contact__main--base">
          <div className="contact__title--base">
            <p>
              Por favor ingrese su información de forma completa en el
              formulario presentado a continuación y uno de nuestros
              representantes se comunicará con usted en cuanto sea posible.
            </p>
          </div>
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="row contact__input-row--base">
              <div className="form-group contact__input--base">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Nombre"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group contact__input--base">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="6"
                placeholder="Mensaje"
                required
                onChange={handleChange}
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn-custom contact__button--base">
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Información de contacto</h3>
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa"
                ></FontAwesomeIcon>{" "}
                Dirección
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
                Teléfono
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
                Correo electrónico
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
            {/* <li>
                <a
                  target="_blank"
                  href={props.data ? props.data.instagram : "/"}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa"
                  ></FontAwesomeIcon>
                </a>
              </li> */}
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
