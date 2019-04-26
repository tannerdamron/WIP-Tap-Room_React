import React from 'react';
import Keg from './Keg';

let lagerKegs = [
  {
    brewer: "Blue Dabadeedabadie",
    price: "$4",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "Lager"
  },
  {
    brewer: "Logger",
    price: "$6",
    abv: "6.10%",
    pintsRemaining: 124,
    style: "Lager"
  }
];

function KegListLager() {
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
        {lagerKegs.map((keg, index) => (
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

export default KegListLager;