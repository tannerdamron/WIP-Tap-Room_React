import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegListAll(props) {
  const { allKegsList, onEditKeg } = props;
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
        {allKegsList.map(keg => (
          <Keg
            onEditKegCreation={onEditKeg}
            brewer={keg.brewer}
            price={keg.price}
            abv={keg.abv}
            pintsRemaining={keg.pintsRemaining}
            style={keg.style}
            kegId={keg.id}
            key={keg.id}
          />
        ))}
      </div>
    </div>
  );
}

KegListAll.propTypes = {
  allKegsList: PropTypes.instanceOf(Array).isRequired,
  onEditKeg: PropTypes.func.isRequired,
};

export default KegListAll;
