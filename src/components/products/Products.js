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
      </div>
    </div>
  );
}
