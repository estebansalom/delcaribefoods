import React from "react";
import ClaimsList from "../../data/claims.json";
export default function Claims() {
  return (
    <div id="claims">
      <div className="landing__claims--base">
        {ClaimsList.map((claim, i) => {
          return (
            <div className="landing__claim">
              <img
                src={claim.image}
                alt=""
                className={"landing__claim-image " + claim.class}
              />
              <div className="landing__claim-info--base">
                <h3 className="landing__claim-name--base"></h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
