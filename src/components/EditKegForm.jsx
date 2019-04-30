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
          width: 200px;
          margin-left: 19%;
        }
      `}
      </style>
      <div>
        <form className="editKegForm" onSubmit={handleEditKegFormSubmission}>
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
          <button type="submit">Edit Keg</button>
          <button type="button" onClick={onHideEditKegForm}>Hide</button>
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
