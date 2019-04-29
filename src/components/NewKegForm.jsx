import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _style = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({brewer: _brewer.value, price: _price.value, abv: _abv.value, pintsRemaining: 124, style: _style.value, id: v4()});
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
            required
            ref={(input) => { _brewer = input; }}/>
          <input
            type="number"
            id="price"
            placeholder="Price per pint"
            required
            ref={(input) => { _price = input; }}/>
          <input
            type="text"
            id="abv"
            placeholder="ABV"
            required
            ref={(input) => { _abv = input; }}/>
          <input
            type="text"
            id="style"
            placeholder="Style of beer"
            required
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