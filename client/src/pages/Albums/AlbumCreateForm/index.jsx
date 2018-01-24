import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {createAlbum} from '../actions';
import renderInputField from '../../../shared/renderInputField';

class AlbumCreateForm extends React.Component {
  submit = data => {
    console.log('in submit');
    this.props.createAlbum(data);
  };

  render() {
    const {handleSubmit, pristine, submitting} = this.props;
    return (
      <div>
        aWWAED
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <Field
              className="form-control"
              name="title"
              component={renderInputField}
              type="input"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting || pristine}>
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

AlbumCreateForm = reduxForm({
  form: 'albumCreateForm'
})(AlbumCreateForm);

const mapDispatchToProps = {createAlbum};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreateForm);
// export default AlbumCreateForm;
