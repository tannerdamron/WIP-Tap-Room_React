import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showNewKegForm: this.props.showNewKegForm
    };
  }

  handleShowNewKegForm() {
    this.setState({ showNewKegForm: true });
  }

  handleHideNewKegForm() {
    this.setState({ showNewKegForm: false });
  }

  render() {
    let newKegForm = null;
    if (this.state.showNewKegForm === true) {
      newKegForm = <NewKegForm
        handleHideNewKegForm={this.handleHideNewKegForm.bind(this)}
        onNewKegCreation={this.props.onNewKegCreation}
      />;
    } else if (this.state.showNewKegForm === false) {
      newKegForm = null;
    }
    return (
      <div>
        <style jsx>{`
          .btn {
            width: 130px;
            height: 50px;
            background-image: linear-gradient(white, goldenrod);
            border-radius: 10px;
            margin-left: 25%;
          }
        `}</style>
        <div>
          <button className="btn" onClick={this.handleShowNewKegForm.bind(this)}>Tap a new keg!</button>
        </div>
        {newKegForm}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func,
  showNewKegForm: PropTypes.bool
};

export default NewKegControl;