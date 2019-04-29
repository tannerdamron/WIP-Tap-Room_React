import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props) {
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _style = null;

  function handleEditKegFormSubmission(e) {
    e.preventDefault();
    props.onEditKegCreation({ brewer: _brewer.value, price: _price.value, abv: _abv.value, pintsRemaining: 124, style: _style.value, id: this.id });
    _brewer.value = '';
    _price.value = '';
    _abv.value = '';
    _style.value = '';
  }

  return (
    <div>
      <style jsx>{`
        .editKegForm {
          width: 200px;
          margin-left: 25%;
        }
      `}</style>
      <div>
        <form className="editKegForm" onSubmit={handleEditKegFormSubmission}>
          <input
            type="text"
            id="brewer"
            placeholder="Brewer"
            required
            ref={(input) => { _brewer = input; }} />
          <input
            type="number"
            id="price"
            placeholder="Price per pint"
            required
            ref={(input) => { _price = input; }} />
          <input
            type="text"
            id="abv"
            placeholder="ABV"
            required
            ref={(input) => { _abv = input; }} />
          <input
            type="text"
            id="style"
            placeholder="Style of beer"
            required
            ref={(input) => { _style = input; }} />
          <button type="submit">Edit Keg</button>
        </form>
      </div>
    </div>
  );
}

EditKegForm.propTypes = {
  onEditKegCreation: PropTypes.func
};

export default EditKegForm;