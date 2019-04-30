import React from 'react';
import PropTypes from 'prop-types';
import EditKegForm from './EditKegForm';
import pint from '../assets/images/pint.png';
import growler from '../assets/images/growler.png';
import tap from '../assets/images/tap.png';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pints: props.pintsRemaining,
      showKegEditForm: false
    };
  }

  sellPint() {
    this.setState({ pints: this.state.pints-1});
    if (this.state.pints <= 0) {
      alert('Keg empty');
      this.setState({ pints: 0});
    }
  }

  sellGrowler() {
    this.setState({ pints: this.state.pints-2 });
    if (this.state.pints <= 0) {
      alert('Keg empty');
      this.setState({ pints: 0 });
    }
  }

  tapkeg() {
    this.setState({ pints: 124 });
  }

  showKegEditForm() {
    this.setState({ showKegEditForm: true });
  }

  handleHideEditKegForm() {
    this.setState({ showKegEditForm: false });
  }

  render() {
    let editKegForm = null;
    if (this.state.showKegEditForm === true) {
      editKegForm = <EditKegForm
        onHideEditKegForm = {this.handleHideEditKegForm.bind(this)}
        kegId = {this.props.kegId}
        onEditKegCreation = {this.props.onEditKegCreation}
      />;
    }
    return(
      <div>
        <style jsx>{`
          .keg {
            color: goldenrod;
            text-align: center;
            font-family: sans-serif;
            font-size: 20px;
            text-shadow: 1px 1px black;
            background-color: rgba(0,0,0,.5);
            width: 300px;
            margin-left: 25%;
            margin-bottom: 10px;
            border-radius: 5%;
            z-index: 2;
            padding: .1px;
          }
          .pint {
            height: 40px;
            width: 20px;
          }
          .pint:hover {
            cursor: pointer;
          }
          .growler {
            height: 50px;
            width: 30px;
          }
          .growler:hover {
            cursor: pointer;
          }
          .tap {
            width: 80px;
            height: 60px;
            margin-left: -20px;
          }
          .tap:hover {
            cursor: pointer;
          }
          .btnRows {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr
          }
        `}</style>
        <div className="keg">
          <div>
            <p>Brewer: {this.props.brewer}</p>
            <p>Price: ${this.props.price}</p>
            <p>ABV: {this.props.abv}</p>
            <p>Pints Remaining: {this.state.pints}</p>
            <p>Style of beer: {this.props.style}</p>
            <div className="btnRows">
              <div>
                <label>Sell Pint     </label>
                <img className="pint" src={pint} onClick={this.sellPint.bind(this)} />
              </div>
              <div>
                <label>Sell Growler     </label>
                <img className="growler" src={growler} onClick={this.sellGrowler.bind(this)} />
              </div>
              <div>
                <label>Tap this keg</label>
                <img className="tap" src={tap} onClick={this.tapkeg.bind(this)}/>
              </div>
              <div>
                <button onClick={this.showKegEditForm.bind(this)}>Edit Keg</button>
              </div>
            </div>
            {editKegForm}
          </div>
        </div>
      </div>
    );
  }
}

Keg.propTypes = {
  brewer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  kegId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onEditKegCreation: PropTypes.func
};

export default Keg;