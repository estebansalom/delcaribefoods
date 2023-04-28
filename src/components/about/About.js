import React from "react";
import { FormattedMessage } from "react-intl";

export default function About(props) {
  return (
    <div id="about" className="landing__about--base section">
      <div className="title-underline">
        <h2 className="landing__about-title--base">
          <FormattedMessage
            id="app.about.title"
            defaultMessage="About Us"
          ></FormattedMessage>
        </h2>
      </div>
      <div className="row landing__about-info--base">
        <div className="landing__about-image--base">
          <img src="https://res.cloudinary.com/esalomc/image/upload/v1682650018/logo2.png" alt="" />
        </div>
        <div className="landing__about-container--base">
          <div className="landing__about-mision--base">
            <h3>
              <FormattedMessage
                id="app.about.mission.title"
                defaultMessage="Mission"
              ></FormattedMessage>
            </h3>
            <p>
              <FormattedMessage
                id="app.about.mission.paragraph1"
                defaultMessage="At Del Caribe Foods we are dedicated to building a trusting, long-
                lasting and profitable partnership with our clients, providing high-
                level end-to-end service while developing their brand."
              ></FormattedMessage>
            </p>
            <p>
              <FormattedMessage
                id="app.about.mission.paragraph2"
                defaultMessage="We value meeting our clients' standards with high-quality products
                while offering sustainable work opportunities for rural Costa
                Rican families."
              ></FormattedMessage>
            </p>
          </div>
          <div className="landing__about-vision--base">
            <h3>
              <FormattedMessage
                id="app.about.vision.title"
                defaultMessage="Vision"
              ></FormattedMessage>
            </h3>
            <p>
              <FormattedMessage
                id="app.about.vision.paragraph"
                defaultMessage="Our vision is to develop the best private label snacks for our
                international markets while providing high-quality products that
                are preferred by customers for delivering a fresh and authentic
                taste that reminds them of their homeland."
              ></FormattedMessage>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
