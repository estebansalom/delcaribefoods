import React from "react";

export default function Products() {
  return (
    <div id="products">
      <h2>Nuestros Productos</h2>
      <div className="landing__products--base">
        <div className="landing__product landing__product--left">
          <img
            src="https://res.cloudinary.com/esalomc/image/upload/v1622354098/plantain-chips.jpg"
            alt=""
            className="landing__product-image landing__product-image--left"
          />
          <div className="landing__product-info--base">
            <h3 className="landing__product-name--base">Platanos</h3>
            <div className="landing__product-description--base">
              Nuestro producto estrella, los plátanos verdes y maduros,
              presentados en distintos sabores y cortes como por ejemplo:
              <ul>
                <li>Strips</li>
                <li>Coins</li>
                <li>Media luna</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="landing__product landing__product--right">
          <img
            src="https://res.cloudinary.com/esalomc/image/upload/v1622354098/yuca-chips.jpg"
            alt=""
            className="landing__product-image landing__product-image--right"
          />
          <div className="landing__product-info--base">
            <h3 className="landing__product-name--base">Yuca</h3>
            <div className="landing__product-description--base">
              Manejamos el procesamiento de las mejores yucas producidas en la
              zona para ser presentados en distintos cortes como:
              <ul>
                <li>Strips</li>
                <li>Coins</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="landing__product landing__product--left">
          <img
            src="https://res.cloudinary.com/esalomc/image/upload/v1622354098/camote-chips.jpg"
            alt=""
            className="landing__product-image landing__product-image--left"
          />
          <div className="landing__product-info--base">
            <h3 className="landing__product-name--base">Camote</h3>
            <div className="landing__product-description--base">
              Exploramos nuevas tendencias como la producción de chips de
              camote, disponibles en presentación:
              <ul>
                <li>Coins</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="landing__product landing__product--right">
          <img
            src="https://res.cloudinary.com/esalomc/image/upload/v1622354098/yuca-congelada.jpg"
            alt=""
            className="landing__product-image landing__product-image--right"
          />
          <div className="landing__product-info--base">
            <h3 className="landing__product-name--base">Malanga</h3>
            <div className="landing__product-description--base">
              Manejamos el procesamiento de los mejores camotes producidos en la
              zona para ser presentados en distintos cortes como:
              <ul>
                <li>Strips</li>
                <li>Coins</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="landing__product landing__product--left">
          <img
            src="https://res.cloudinary.com/esalomc/image/upload/v1622354098/platano-congelado.jpg"
            alt=""
            className="landing__product-image landing__product-image--left"
          />
          <div className="landing__product-info--base">
            <h3 className="landing__product-name--base">Platanos</h3>
            <div className="landing__product-description--base">
              Manejamos el procesamiento de los mejores platátanos producidos en
              la zona para ser presentados en distintos cortes como:
              <ul>
                <li>Strips</li>
                <li>Coins</li>
                <li>Media luna</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
