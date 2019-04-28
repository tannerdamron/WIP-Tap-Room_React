import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegListAll(props) {

  return (
    <div>
      <style jsx>{`
        .kegHeader {
          color: goldenrod;
          font-family: sans-serif;
          font-size: 40px;
          font-weight: lighter;
          text-align: center;
          text-shadow: 1px 1px black;
        }
      `}</style>
      <div>
        <h2 className="kegHeader">Available Kegs</h2>
        {props.allKegsList.map((keg) => (
          <Keg
            brewer={keg.brewer}
            price={keg.price}
            abv={keg.abv}
            pintsRemaining={keg.pintsRemaining}
            style={keg.style}
            key={keg.id}
          />
        ))}
      </div>
    </div>
  );
}

KegListAll.propTypes = {
  allKegsList: PropTypes.array
};

export default KegListAll;
