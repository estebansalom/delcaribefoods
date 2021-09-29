import React from "react";
import { FormattedMessage } from "react-intl";
import ProductList from "../../data/products.json";

export default function Products() {
  return (
    <div id="products">
      <h2>
        <FormattedMessage
          id="app.products.title"
          defaultMessage="Our Products"
        ></FormattedMessage>
      </h2>
      <div className="landing__products--base">
        {ProductList.map((product, i) => {
          return (
            <div className="landing__product">
              <img
                src={product.image}
                alt=""
                className="landing__product-image"
              />
              <div className="landing__product-info--base">
                <h3 className="landing__product-name--base">
                  <FormattedMessage
                    id={product.nameId}
                    defaultMessage={product.name}
                  ></FormattedMessage>
                </h3>
                <div className="landing__product-description--base">
                  {product.description}
                  {/* <ul>
                    {product.cuts.map((cut, i) => {
                      return (
                        <li>
                          <FormattedMessage
                            id={cut.id}
                            defaultMessage={cut.name}
                          ></FormattedMessage>
                        </li>
                      );
                    })}
                  </ul> */}
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="landing__product landing__product--left">
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
        </div> */}
      </div>
    </div>
  );
}
