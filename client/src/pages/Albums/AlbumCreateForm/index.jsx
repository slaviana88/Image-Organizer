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

import PhotographyDropzone from '../Photography';
import MyMapComponent from '../Detail/Map';
import PlacesWithStandaloneSearchBox from '../Detail/Map/SearchBox';

class AlbumCreateForm extends React.Component {
  submit = data => {
    const data2 = !_.isNil(this.props.directions)
      ? Object.assign(data, {
          latitude: this.props.directions.lat(),
          longtitude: this.props.directions.lng()
        })
      : {};
    const extraActions = [this.props.toggleModal];
    this.props.createAlbum(data, this.props.images, extraActions);
  };

  render() {
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
          <PhotographyDropzone />
          <MyMapComponent
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div>{'Loading'}</div>}
            containerElement={<div style={{ height: 500, width: 700 }} />}
            mapElement={<div style={{ height: 400 }} />}
          />
          <PlacesWithStandaloneSearchBox />
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
    images: _.get(state, 'dropzoneImages.images', []),
    directions: _.get(state.album, 'places[0].geometry.location')
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreateForm);
