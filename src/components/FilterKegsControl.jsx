import React from 'react';
import PropTypes from 'prop-types';
import KegListAll from './KegListAll';

class FilterKegsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'all',
    };
  }

  handleFilterChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    // Destructuring props and state
    const {
      onEditKeg,
      onRemoveKeg,
      allKegsList,
      allIpaKegsList,
      allLagerKegsList,
      allStoutKegsList,
    } = this.props;
    const { value } = this.state;
    let kegFilter = null;
    kegFilter = (
      <KegListAll
        filterValue={value}
        onRemoveKeg={onRemoveKeg}
        onEditKeg={onEditKeg}
        allKegsList={allKegsList}
        allIpaKegsList={allIpaKegsList}
        allLagerKegsList={allLagerKegsList}
        allStoutKegsList={allStoutKegsList}
      />
    );
    return (
      <div>
        <style jsx>
          {`
            .filterLabel {
              text-align: center;
              color: goldenrod;
              font-family: sans-serif;
              font-weight: lighter;
              text-shadow: 1px 1px black;
              font-size: 20px;
            }
            .filterSelect {
              margin-left: 50%;
              margin-top: -20px;
            }
            select {
              background-image: linear-gradient(white, goldenrod);
              width: 100px;
              height: 20px;
            }
            select:hover {
              cursor: pointer;
            }
        `}
        </style>
        <div className="filterSelect">
          <label className="filterLabel">Filter keg list by: </label>
          <select value={value} onChange={this.handleFilterChange.bind(this)}>
            <option value="all">All</option>
            <option value="stout">Stout</option>
            <option value="lager">Lager</option>
            <option value="ipa">IPA</option>
          </select>
        </div>
        {kegFilter}
      </div>
    );
  }
}

FilterKegsControl.propTypes = {
  allKegsList: PropTypes.instanceOf(Array).isRequired,
  onEditKeg: PropTypes.func.isRequired,
  onRemoveKeg: PropTypes.func.isRequired,
};

export default FilterKegsControl;
