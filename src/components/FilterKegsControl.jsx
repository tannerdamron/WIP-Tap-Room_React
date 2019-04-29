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
      value: 'all'
    };
  }

  handleFilterChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let kegFilter = null;
    if (this.state.value === 'all') {
      kegFilter = <KegListAll
        onEditKeg={this.props.onEditKeg}
        allKegsList={this.props.allKegsList}
      />;
    } else if (this.state.value === 'stout') {
      kegFilter = <KegListStout/>;
    } else if (this.state.value === 'lager') {
      kegFilter = <KegListLager/>;
    } else if (this.state.value === 'ipa') {
      kegFilter = <KegListIPA />;
    }
    return (
      <div>
        <style jsx>{`
          .btn {
            background-image: linear-gradient(white, goldenrod);
          }
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
        `}</style>
        <div className="filterSelect">
          <label className="filterLabel">Filter keg list by: </label>
          <select value={this.state.value} onChange={this.handleFilterChange.bind(this)}>
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
  allKegsList: PropTypes.array,
  onEditKeg: PropTypes.func
};

export default FilterKegsControl;