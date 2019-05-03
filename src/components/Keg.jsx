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
      showKegEditForm: false,
    };
  }

  sellPint() {
    const { pints } = this.state;
    this.setState({ pints: pints - 1 });
    if (pints <= 0) {
      alert('Keg empty');
      this.setState({ pints: 0 });
    }
  }

  sellGrowler() {
    const { pints } = this.state;
    this.setState({ pints: pints - 2 });
    if (pints <= 0) {
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
    const {
      kegId, onEditKegCreation, brewer, price, abv, style,
    } = this.props;
    const { showKegEditForm, pints } = this.state;
    let editKegForm = null;
    if (showKegEditForm === true) {
      editKegForm = (
        <EditKegForm
          onHideEditKegForm={e => this.handleHideEditKegForm(e)}
          kegId={kegId}
          onEditKegCreation={onEditKegCreation}
        />
      );
    } else if (showKegEditForm === false) {
      editKegForm = null;
    }
    return (
      <div>
        <style jsx>
          {`
            .keg {
              color: goldenrod;
              text-align: center;
              font-family: sans-serif;
              font-size: 20px;
              text-shadow: 1px 1px black;
              background-color: rgba(40, 40, 40, 0.8);
              width: 300px;
              height: 470px;
              margin-left: 15%;
              margin-bottom: 10px;
              border-radius: 5%;
              padding: 0.1px;
              border: 1px solid white;
            }
            .pint {
              height: 40px;
              width: 20px;
            }
            .pint:hover {
              cursor: pointer;
              height: 50px;
              width: 30px;
            }
            .growler {
              height: 50px;
              width: 30px;
            }
            .growler:hover {
              cursor: pointer;
              height: 60px;
              width: 40px;
            }
            .tap {
              width: 80px;
              height: 60px;
              margin-left: -20px;
            }
            .tap:hover {
              cursor: pointer;
              width: 120px;
            }
            .btnRows {
              display: grid;
              grid-template-rows: 1fr 1fr 1fr 1fr;
            }
            div {
              outline: none;
            }
            .editBtn {
              background-image: linear-gradient(white, goldenrod);
              border-radius: 5px;
              border: 1px solid darkgray;
              width: 120px;
              margin-top: 10px;
              font-size: 14px;
              box-shadow: inset 0 0 10px black;
            }
            .editBtn:hover {
              cursor: pointer;
              box-shadow: inset 0 0 20px black;
            }
          `}
        </style>
        <div id="keg" className="keg">
          <div>
            <p>{`Brewer: ${brewer}`}</p>
            <p>{`Price: $${price}`}</p>
            <p>{`ABV: ${abv}`}</p>
            <p>{`Pints Remaining: ${pints}`}</p>
            <p>{`Style of beer: ${style}`}</p>
            <div className="btnRows">
              <div
                onClick={e => this.sellPint(e)}
                onKeyPress={this.handleKeyPress}
                role="button"
                tabIndex={0}
              >
                <label>Sell Pint</label>
                <img alt="pint of beer" className="pint" src={pint} />
              </div>
              <div
                onClick={e => this.sellGrowler(e)}
                onKeyPress={this.handleKeyPress}
                role="button"
                tabIndex={0}
              >
                <label>Sell Growler</label>
                <img
                  alt="growler for beer"
                  className="growler"
                  src={growler}
                />
              </div>
              <div
                onClick={e => this.tapkeg(e)}
                onKeyPress={this.handleKeyPress}
                role="button"
                tabIndex={0}
              >
                <label>Tap this keg</label>
                <img alt="keg tap" className="tap" src={tap} />
              </div>
              <div>
                <button
                  className="editBtn"
                  type="button"
                  onClick={e => this.showKegEditForm(e)}
                >
                  Edit keg
                </button>
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
  onEditKegCreation: PropTypes.func.isRequired,
};

export default Keg;
