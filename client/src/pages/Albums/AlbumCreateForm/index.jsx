import React from 'react';
import _ from 'lodash';
import { Dropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createAlbum } from '../List/actions';
import { dropzoneField } from '../../../components/Dropzone';
import renderInputField from '../../../shared/renderInputField';
import renderTextArea from '../../../shared/renderTextArea';
import defaultImage from '../../../assets/images/default_image.png';

import PhotographyDropzone from './Photography';

class AlbumCreateForm extends React.Component {
  submit = data => {
    let fileData = [];

    _.each(this.props.images, image =>
      fileData.push({
        filename: image.name,
        file_type: image.type
      })
    );

    this.props.createAlbum(data, fileData, this.props.images);
  };

  render() {
    let dropzone = { ref: null };

    const { handleSubmit, pristine, submitting } = this.props;
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
          <span
            className="link"
            onClick={() => {
              dropzone.ref.open();
            }}>
            Add image
          </span>
          <PhotographyDropzone />
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

const mapDispatchToProps = { createAlbum };

const mapStateToProps = state => {
  return {
    images: _.get(state, 'createAlbum.images', [])
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreateForm);
