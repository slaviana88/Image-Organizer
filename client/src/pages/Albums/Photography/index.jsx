import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { addImage, removeImage, moveImage, deleteState } from './actions';

import { renderToggle } from '../../../shared/RenderToggle/';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
import { checkImageIsBigEnough } from './utils';

import './styles.scss';

const Image = SortableElement(({ image, deleteImage, isDraggable }) => {
  const getImageStyle = image => {
    return { backgroundImage: `url(${image.preview})` };
  };
  const draggableClass = isDraggable ? 'draggable-image' : '';

  return (
    <div className="col-xs-2">
      {image.newImage ? (
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
      ) : (
        <img src={'http://localhost:3001/static/' + image.pathToFile} />
      )}
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

  componentWillUnmount() {
    this.props.deleteState();
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
      console.log('dispatch', file);
      // checkImageIsBigEnough(file, 200, 200)
      this.props.addImage(file);
      // .catch(showError);
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, images } = this.props;
    const { tooSmallImages } = this.state;
    console.log(images);

    const uploadFiles =
      images.length === 0 ? (
        <div className="row center-xs row-container">
          <div className="upload-images-container col-xs-5">
            <div className="new-listing-upload-images-title">
              Drag images here to upload or
              <br />
              click below to choose files from your device.
            </div>
            <div className="btn btn-primary upload-images">Upload Images</div>
            <div className="upload-images-label">
              JPG or PNG supproted, minimum size is ..
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: _.get(state, 'dropzoneImages.images', [])
  };
};

const mapDispatchToProps = {
  addImage,
  removeImage,
  moveImage,
  deleteState
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PhotographyDropzone
);
