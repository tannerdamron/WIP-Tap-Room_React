import React from 'react';
import PropTypes from "prop-types";

function NewKegForm(props) {
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _style = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({brewer: _brewer.value, price: _price.value, abv: _abv.value, style: _style.value});
    _brewer.value = '';
    _price.value = '';
    _abv.value = '';
    _style.value = '';
  }

  return(
    <div>
      <style jsx>{`
        .newKegForm {
          width: 200px;
          margin-left: 25%;
        }
      `}</style>
      <div>
        <form className="newKegForm" onSubmit={handleNewKegFormSubmission}>
          <input
            type="text"
            id="brewer"
            placeholder="Brewer"
            ref={(input) => { _brewer = input; }}/>
          <input
            type="number"
            id="price"
            placeholder="Price per pint"
            ref={(input) => { _price = input; }}/>
          <input
            type="text"
            id="abv"
            placeholder="ABV"
            ref={(input) => { _abv = input; }}/>
          <input
            type="text"
            id="style"
            placeholder="Style of beer"
            ref={(input) => { _style = input; }}/>
          <button type="submit">Add Keg</button>
        </form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;