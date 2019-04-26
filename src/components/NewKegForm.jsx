import React from 'react';
import PropTypes from "prop-types";

function NewKegForm() {
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _style = null;

  function handleNewKegFormSubmission(e) {
    console.log(_brewer.value);
    console.log(_price.value);
    console.log(_abv.value);
    console.log(_style.value);
    e.preventDefault();
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
export default NewKegForm;