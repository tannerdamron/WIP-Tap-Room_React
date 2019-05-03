import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    const { showNewKegForm } = this.props;
    this.state = {
      showNewKegForm: { showNewKegForm },
    };
  }

  handleShowNewKegForm() {
    this.setState({ showNewKegForm: true });
  }

  handleHideNewKegForm() {
    this.setState({ showNewKegForm: false });
  }

  render() {
    const { onNewKegCreation } = this.props;
    const { showNewKegForm } = this.state;
    let newKegForm = null;
    if (showNewKegForm === true) {
      newKegForm = (
        <NewKegForm
          handleHideNewKegForm={e => this.handleHideNewKegForm(e)}
          onNewKegCreation={onNewKegCreation}
        />
      );
    } else if (showNewKegForm === false) {
      newKegForm = null;
    }
    return (
      <div>
        <style jsx>
          {`
          .btn {
            width: 130px;
            height: 50px;
            background-image: linear-gradient(white, goldenrod);
            box-shadow: inset 0 0 10px black;
            border-radius: 10px;
            margin-left: 25%;
            outline: none;
            font-size: 15px;
          }
          .btn:hover {
            cursor: pointer;
            box-shadow: inset 0 0 20px black;
          }
        `}
        </style>
        <div>
          <button type="button" className="btn" onClick={e => this.handleShowNewKegForm(e)}>Tap a new keg!</button>
        </div>
        {newKegForm}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func.isRequired,
  showNewKegForm: PropTypes.func,
};

NewKegControl.defaultProps = {
  showNewKegForm: PropTypes.func,
};

export default NewKegControl;
