import React from 'react';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showNewKegForm: false
    };
  }

  handleShowNewKegForm() {
    this.setState({ showNewKegForm: true })
  }

  render() {
    let newKegForm = null;
    if (this.state.showNewKegForm === true) {
      newKegForm = <NewKegForm/>
    }
    return (
      <div>
        <style jsx>{`
          .btn {
            width: 130px;
            height: 50px;
            background-color: goldenrod;
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

export default NewKegControl;