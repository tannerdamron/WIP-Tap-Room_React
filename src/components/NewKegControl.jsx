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
            border-radius: 10px;
            margin-left: 25%;
          }
        `}
        </style>
        <div>
          <button type="button" className="btn" onClick={this.handleShowNewKegForm.bind(this)}>Tap a new keg!</button>
        </div>
        {newKegForm}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func.isRequired,
  showNewKegForm: PropTypes.bool.isRequired,
};

export default NewKegControl;
