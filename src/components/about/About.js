import React from "react";

export default function About(props) {
  return (
    <div id="about" className="landing__about--base section">
      <div className="title-underline">
        <h2 className="landing__about-title--base">Sobre Nosotros</h2>
      </div>
      <div className="row landing__about-info--base">
        <div className="landing__about-image--base">
          <img src="img/logo2.png" alt="" />
        </div>
        <div className="landing__about-container--base">
          <div className="landing__about-mision--base">
            <h3>Misión</h3>
            <p>
              Producir las mejores soluciones a las necesidades de nuestros
              clientes por medio de nuestros productos snacks y congelados de
              alta calidad. Así beneficiando a zonas rurales de nuestro país y
              colaborando a la economía de muchas familias.
            </p>
            <p>
              Proveerles a nuetros clientes un servicio y productos de calidad
              inigualable, generar la confianza de empacarles bajo su marca
              privada y crear un negocio rentable para ambas partes.
            </p>
          </div>
          <div className="landing__about-vision--base">
            <h3>Visión</h3>
            <p>
              Ser una empresa en constante crecimiento por medio de la
              innovación y del conocimiento de los mercados internacionales que
              trabajamos, suplir de productos con marcas privadas que sean de
              gran éxito para nuestros clientes y que por medio de ellos podamos
              llegar al consumidor final con productos de excelente calidad que
              les haga revivir los sabores de su tierra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
