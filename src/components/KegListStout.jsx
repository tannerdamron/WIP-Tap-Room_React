import React from 'react';
import Keg from './Keg';

let stoutKegs = [
  {
    brewer: "Ninkasi",
    price: "$6",
    abv: "7.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "Tan",
    price: "$7",
    abv: "9.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "The Jam",
    price: "$25",
    abv: "21.0%",
    pintsRemaining: 124,
    style: "Stout"
  }
];

function KegListStout() {
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
        {stoutKegs.map((keg, index) => (
          <Keg
            brewer={keg.brewer}
            price={keg.price}
            abv={keg.abv}
            pintsRemaining={keg.pintsRemaining}
            style={keg.style}
            key={index} />
        ))}
      </div>
    </div>
  );
}

export default KegListStout;