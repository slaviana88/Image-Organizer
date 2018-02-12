import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import {
  MIN_PROPERTY_IMAGE_HEIGHT,
  MIN_PROPERTY_IMAGE_WIDTH
} from 'src/global-constants';

import {
  requestUpdatePhotographySection,
  addImage,
  removeImage,
  moveImage,
  deletePropertyImage
} from '../actions';

import { getClosestThumbnailAsBackground } from 'src/shared/utils/thumbnails';
import { checkImageIsBigEnough } from 'src/shared/utils/checkImageIsBigEnough';
import { renderToggle } from 'src/shared/forms/renderToggle';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';

import './styles.scss';

const Image = SortableElement(({ image, deleteImage, isDraggable }) => {
  const getImageStyle = image => {
    if (image.newImage) {
      return { backgroundImage: `url(${image.preview})` };
    }
    return getClosestThumbnailAsBackground(
      _.get(image, 'thumbnails'),
      200,
      200,
      image
    );
  };
  const draggableClass = isDraggable ? 'draggable-image' : '';

  return (
    <div className="col-xs-2">
      <div
        className={`property-image-sortable ${draggableClass}`}
        style={getImageStyle(image)}>
        {isDraggable ? (
          ''
        ) : (
          <img
            src="/assets/images/icon-cross.svg"
            className="delete-button"
            onClick={() => deleteImage(image)}
          />
        )}
      </div>
    </div>
  );
});

const Images = SortableContainer(
  ({ items, deleteImage, reorderImages, toggleReorder }) => {
    return (
      <div>
        <div className="row images-stats">
          <div className="col-xs-6 images-count">
            {items.length} Images in use
          </div>
          <div className="col-xs-6  left-xs images-reorder">
            <span>Reorder Images:</span>
            <label className="switch">
              <input type="checkbox" onChange={toggleReorder} />
              <span className="slider round" />
            </label>
          </div>
        </div>
        <div className="row images-row">
          {reorderImages}
          {items.map((image, index) => (
            <Image
              key={index}
              index={index}
              image={image}
              deleteImage={deleteImage}
              disabled={!reorderImages}
              isDraggable={reorderImages}
            />
          ))}
        </div>
      </div>
    );
  }
);

class PhotographyDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reorderImages: false,
      tooSmallImages: []
    };
  }

  toggleReorder = () => {
    this.setState({
      reorderImages: !this.state.reorderImages
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.moveImage(oldIndex, newIndex);
  };

  onDrop(files) {
    this.setState({ tooSmallImages: [] });

    let showError = newFile => {
      this.setState(prevState => ({
        tooSmallImages: [...prevState.tooSmallImages, newFile.name]
      }));
    };

    files.forEach(file => {
      checkImageIsBigEnough(
        file,
        MIN_PROPERTY_IMAGE_WIDTH,
        MIN_PROPERTY_IMAGE_HEIGHT
      )
        .then(this.props.addImage)
        .catch(showError);
    });
  }

  submit = () => {
    const propertyId = this.props.props.propertyId;

    this.props.requestUpdatePhotographySection(this.props.images, propertyId);
    this.props.nextSection(true);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, images } = this.props;
    const { tooSmallImages } = this.state;

    const uploadFiles =
      images.length === 0 ? (
        <div className="row center-xs row-container">
          <div className="upload-images-container col-xs-5">
            <div className="new-listing-upload-images-title">
              Drag images here to upload or
              <br />
              click below to choose files from your device.
            </div>
            <button className="btn btn btn-primary upload-images">
              Upload Images
            </button>
            <div className="upload-images-label">
              JPG or PNG supproted, minimum size is 1600x1200
            </div>
          </div>
        </div>
      ) : (
        <div className="upload-images-link">Upload More Images</div>
      );

    return (
      <div>
        {tooSmallImages.length === 0 ? (
          ''
        ) : (
          <div className="text-alert">
            These images are too small: {tooSmallImages.join(', ')}
          </div>
        )}
        {images.length !== 0 ? (
          <Images
            distance={5}
            axis="xy"
            items={images}
            deleteImage={this.props.removeImage}
            onSortEnd={this.onSortEnd}
            reorderImages={this.state.reorderImages}
            toggleReorder={this.toggleReorder}
          />
        ) : (
          ''
        )}
        <Dropzone
          multiple={true}
          style={{ position: 'relative' }}
          accept="image/jpeg, image/png"
          name="property_images"
          className="property-images"
          onDrop={this.onDrop.bind(this)}>
          {uploadFiles}
        </Dropzone>
        <button className="btn btn-primary upload-btn" onClick={this.submit}>
          Next Step
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: _.get(state, 'properties.property.photography.images', null)
  };
};

const mapDispatchToProps = {
  requestUpdatePhotographySection,
  deletePropertyImage,
  addImage,
  removeImage,
  moveImage
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PhotographyDropzone
);
