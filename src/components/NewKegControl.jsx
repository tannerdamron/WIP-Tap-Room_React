import React from 'react';
import NewKegForm from './NewKegForm';

class NewKeg extends React.Component{

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
            width: 100px;
            background-color: red;
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

export default NewKeg;