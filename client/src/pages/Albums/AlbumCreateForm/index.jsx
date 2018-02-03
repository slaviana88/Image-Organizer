import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {createAlbum} from '../List/actions';
import renderInputField from '../../../shared/renderInputField';
import renderTextArea from '../../../shared/renderTextArea';

class AlbumCreateForm extends React.Component {
  submit = data => this.props.createAlbum(data);

  render() {
    const {handleSubmit, pristine, submitting} = this.props;
    return (
      <div className="album-create-form">
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <Field
              className="form-control"
              name="title"
              component={renderInputField}
              type="input"
            />
            <label className="form-label">Description</label>
            <Field
              className="form-control"
              name="description"
              component={renderTextArea}
              type="input"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting || pristine}>
            Create
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
