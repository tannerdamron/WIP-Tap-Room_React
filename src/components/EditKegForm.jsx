import React from 'react';
import PropTypes from 'prop-types';

const EditKegForm = ({ onHideEditKegForm, onEditKegCreation, kegId }) => {
  let brewer = null;
  let price = null;
  let abv = null;
  let style = null;

  function handleEditKegFormSubmission(e) {
    e.preventDefault();
    onEditKegCreation({
      brewer: brewer.value,
      price: price.value,
      abv: abv.value,
      pintsRemaining: 124,
      style: style.value,
      id: kegId,
    });
    brewer.value = '';
    price.value = '';
    abv.value = '';
    style.value = '';
  }

  return (
    <div>
      <style jsx>
        {`
        .editKegForm {
          width: 223px;
          margin-left: 5%;
          margin-top: -160%;
        }
        input {
          width: 120%;
          height: 25px;
          background-color: rgba(105,105,105);
          color: goldenrod;
        }
        ::placeholder {
          color: white;
        }
        .brewerInput {

        }
        .priceInput {
          margin-top: 9%;
        }
        .abvInput {
          margin-top: 5%
        }
        .styleInput {
          margin-top: 22%;
        }
        button {
          margin-left: 5%;
          width: 250px;
          background-image: linear-gradient(white, goldenrod);
          border-radius: 10px;
          border: 1px solid darkgray;
          font-size: 20px;
          box-shadow: inset 0 0 10px black;
        }
        .submitBtn {
          margin-top: 16px;
          height: 120px;
        }
        .hideBtn {
          margin-top: 14px;
          height: 90px;
        }
        button:hover {
          cursor: pointer;
          box-shadow: inset 0 0 20px black;
        }
      `}
      </style>
      <div>
        <form className="editKegForm" onSubmit={handleEditKegFormSubmission}>
          <input
            type="text"
            className="brewerInput"
            placeholder="Brewer"
            required
            ref={(input) => { brewer = input; }}
          />
          <br />
          <input
            className="priceInput"
            type="number"
            id="price"
            placeholder="Price per pint"
            required
            ref={(input) => { price = input; }}
          />
          <br />
          <input
            className="abvInput"
            type="text"
            id="abv"
            placeholder="ABV"
            required
            ref={(input) => { abv = input; }}
          />
          <br />
          <input
            className="styleInput"
            type="text"
            id="style"
            placeholder="Style of beer"
            required
            ref={(input) => { style = input; }}
          />
          <button className="submitBtn" type="submit">Submit Edit</button>
          <button className="hideBtn" type="button" onClick={onHideEditKegForm}>Hide</button>
        </form>
      </div>
    </div>
  );
};

EditKegForm.propTypes = {
  onEditKegCreation: PropTypes.func.isRequired,
  kegId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onHideEditKegForm: PropTypes.func.isRequired,
};

export default EditKegForm;
