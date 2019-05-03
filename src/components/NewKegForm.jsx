import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  const { handleHideNewKegForm } = props;
  let brewer = null;
  let price = null;
  let abv = null;
  let style = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({
      brewer: brewer.value,
      price: price.value,
      abv: abv.value,
      pintsRemaining: 124,
      style: style.value,
      id: v4(),
    });
    handleHideNewKegForm();
    brewer.value = '';
    price.value = '';
    abv.value = '';
    style.value = '';
  }

  return (
    <div>
      <style jsx>
        {`
        .newKegForm {
          width: 200px;
          margin-left: 20%;
          margin-top: -7%;
          margin-right: 10%;
        }
        .hideBtn {
          margin-left: 3%;
        }
        button {
          background-image: linear-gradient(white, goldenrod);
          border-radius: 5px;
          border: 1px solid darkgray;
          width: 65px;
          margin-top: 10px;
          font-size: 11px;
          box-shadow: inset 0 0 5px black;
        }
        ::placeholder {
          color: goldenrod;
        }
        button:hover {
          cursor: pointer;
          box-shadow: inset 0 0 10px black;
        }
        input {
          width: 120%;
          height: 30px;
          background-color: rgba(105,105,105);
          color: goldenrod;
        }
      `}
      </style>
      <div>
        <form className="newKegForm" onSubmit={handleNewKegFormSubmission}>
          <input
            type="text"
            id="brewer"
            placeholder="Brewer"
            required
            ref={(input) => { brewer = input; }}
          />
          <input
            type="number"
            id="price"
            placeholder="Price per pint"
            required
            ref={(input) => { price = input; }}
          />
          <input
            type="text"
            id="abv"
            placeholder="ABV"
            required
            ref={(input) => { abv = input; }}
          />
          <input
            type="text"
            id="style"
            placeholder="Style of beer"
            required
            ref={(input) => { style = input; }}
          />
          <button className="addKegBtn" type="submit">Add Keg</button>
          <button className="hideBtn" type="button" onClick={handleHideNewKegForm}>Hide</button>
        </form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func.isRequired,
  handleHideNewKegForm: PropTypes.func.isRequired,
};

export default NewKegForm;
