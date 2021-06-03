import React from "react";

export default function Parallax(props) {
  return (
    <div
      id="page-top"
      className="landing__parallax-container--base"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/esalomc/image/upload/v1622745417/your-brand-here.jpg)`,
      }}
    ></div>
  );
}
