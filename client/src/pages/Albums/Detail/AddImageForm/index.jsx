import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {dropzoneField} from '../../../../components/Dropzone';

import {addImage} from './actions';
import defaultImage from '../../../../assets/images/default_image.png';

class AddImageForm extends React.Component {
  state = {image: null};

  submit = () => {
    const {image} = this.state;
    let fileData = {};

    if (!_.isNil(image.name) && !_.isNil(image.type)) {
      fileData = {
        filename: image.name,
        file_type: image.type
      };
    }

    this.props.addImage(data, fileData, image);
  };

  onDrop = files => {
    this.setState({
      image: files[0]
    });
  };

  render() {
    let dropzone = {ref: null};
    const {image} = this.state;
    const {handleSubmit, pristine, submitting} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="form-group">
            <span
              className="link"
              onClick={() => {
                dropzone.ref.open();
              }}>
              Add image
            </span>
            <Field
              name="image"
              multiple={false}
              component={dropzoneField(dropzone)}
              style={{
                backgroundImage:
                  image !== null
                    ? `url(${image.preview})`
                    : `url(${defaultImage})`
              }}
              onChange={(_, files) => this.onDrop(files)}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting || pristine}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

AddImageForm = reduxForm({
  form: 'addImageForm'
})(AddImageForm);

const mapDispatchToProps = {addImage};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImageForm);
