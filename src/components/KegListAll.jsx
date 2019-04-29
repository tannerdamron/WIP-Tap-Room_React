import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegListAll(props) {
  return (
    <div>
      <style jsx>{`
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
      `}</style>
      <h2 className="kegHeader">Available Kegs</h2>
      <div className="list">
        {props.allKegsList.map((keg) => (
          <Keg
            onEditKegCreation={props.onEditKeg}
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
  allKegsList: PropTypes.array,
  onEditKegCreation: PropTypes.func
};

export default KegListAll;
