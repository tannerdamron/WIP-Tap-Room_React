import React from 'react';
import Keg from './Keg';

let allKegs = [
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
    brewer: "Space Dust IPA",
    price: "$5",
    abv: "8.20%",
    pintsRemaining: 124,
    style: "IPA"
  },
  {
    brewer: "Blue Dabadeedabadie",
    price: "$4",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "Lager"
  },
  {
    brewer: "The Jam",
    price: "$25",
    abv: "21.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "Froth God",
    price: "$5",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "IPA"
  },
  {
    brewer: "Logger",
    price: "$6",
    abv: "6.10%",
    pintsRemaining: 124,
    style: "Lager"
  }
];

function KegListAll() {
  return(
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <h2>Available Kegs</h2>
          {allKegs.map((keg, index) => (
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

export default KegListAll;