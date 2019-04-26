import React from 'react';
import KegListAll from './KegListAll';
import KegListStout from './KegListStout';

class FilterKegsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allKegs: true,
      stoutKegs: false
    };
  }

  handleKegListAll() {
    this.setState({ allKegs: true });
    this.setState({ stoutKegs: false })
  }

  handleKegListStout() {
    this.setState({ stoutKegs: true });
    this.setState({ allKegs: false })
  }

  render() {
    let kegFilter = null;
    if (this.state.allKegs === true) {
      kegFilter = <KegListAll/>
    } else if (this.state.stoutKegs === true) {
      kegFilter = <KegListStout/>
    } else {
      kegFilter =
      <div>
        <h1>Fail</h1>
      </div>
    }
    return (
      <div>
        <style jsx>{`
          .btn {
            background-color: red;
          }
        `}</style>
        <div>
          <button className="btn" onClick={this.handleKegListAll.bind(this)}>All</button>
          <button className="btn" onClick={this.handleKegListStout.bind(this)}>Stouts</button>
        </div>
          {kegFilter}
      </div>
    );
  }
}

export default FilterKegsControl;