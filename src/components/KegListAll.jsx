import React from 'react';
import Keg from './Keg';
import newKegForm from './NewKegForm';

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

class KegListAll extends React.Component {

  handleAddNewKeg(newKeg) {
    allKegs.push(newKeg);
  }

  render() {
    return(
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
            {allKegs.map((keg, index) => (
              <Keg triggerParentUpdate={this.handleAddNewKeg}
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
}

export default KegListAll;