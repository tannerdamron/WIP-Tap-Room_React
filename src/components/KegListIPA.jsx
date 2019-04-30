import React from 'react';
import Keg from './Keg';

const ipaKegs = [
  {
    brewer: 'Space Dust IPA',
    price: '5',
    abv: '8.20%',
    pintsRemaining: 124,
    style: 'IPA',
    id: 1,
  },
  {
    brewer: 'Froth God',
    price: '5',
    abv: '5.50%',
    pintsRemaining: 124,
    style: 'IPA',
    id: 2,
  },
];

function KegListIPA() {
  return (
    <div>
      <style jsx>
        {`
        .list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .kegHeader {
          color: goldenrod;
          font-family: sans-serif;
          font-size: 40px;
          font-weight: lighter;
          text-align: center;
          text-shadow: 1px 1px black;
        }
      `}
      </style>
      <h2 className="kegHeader">Available Kegs</h2>
      <div className="list">
        {ipaKegs.map(keg => (
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

export default KegListIPA;
