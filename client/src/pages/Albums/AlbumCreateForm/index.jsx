import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Dropzone from 'react-dropzone';
import {createAlbum} from '../List/actions';
import renderInputField from '../../../shared/renderInputField';
import renderTextArea from '../../../shared/renderTextArea';
import defaultImage from '../../../assets/images/default_image.png';

const renderDropzoneInputFactory = dropzone => field => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        ref={node => {
          dropzone.ref = node;
        }}
        name={field.name}
        className={field.className}
        multiple={field.multiple}
        style={field.style}
        onDrop={filesToUpload => field.input.onChange(filesToUpload)}
      />
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
};

class AlbumCreateForm extends React.Component {
  state = {
    image: null
  };
  submit = data => {
    const {image} = this.state;
    let fileData = {};

    if (!_.isNil(image.name) && !_.isNil(image.type)) {
      fileData = {
        filename: image.name,
        file_type: image.type
      };
    }

    this.props.createAlbum(data, fileData, image);
  };

  onDrop = files => {
    this.setState({
      image: files[0]
    });
  };

  render() {
    let dropzone = {ref: null};
    console.log(this.state.image);
    this.state.image ? console.log(this.state.image.preview.slice(5)) : null;
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
          <span
            className="link"
            onClick={() => {
              dropzone.ref.open();
            }}>
            Add image
          </span>
          <Field
            name="image"
            className="image"
            multiple={false}
            component={renderDropzoneInputFactory(dropzone)}
            style={{
              backgroundImage:
                this.state.image !== null
                  ? `url(${this.state.image.preview})`
                  : `url(${defaultImage})`
            }}
            onChange={(_, files) => this.onDrop(files)}
          />
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
