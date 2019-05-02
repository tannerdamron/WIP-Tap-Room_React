import React from 'react';
import PropTypes from 'prop-types';
import KegListAll from './KegListAll';
import KegListStout from './KegListStout';
import KegListLager from './KegListLager';
import KegListIPA from './KegListIPA';

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
    const { onEditKeg, allKegsList } = this.props;
    const { value } = this.state;
    let kegFilter = null;
    if (value === 'all') {
      kegFilter = (
        <KegListAll
          onEditKeg={onEditKeg}
          allKegsList={allKegsList}
        />
      );
    } else if (value === 'stout') {
      kegFilter = <KegListStout />;
    } else if (value === 'lager') {
      kegFilter = <KegListLager />;
    } else if (value === 'ipa') {
      kegFilter = <KegListIPA />;
    }
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
};

export default FilterKegsControl;
