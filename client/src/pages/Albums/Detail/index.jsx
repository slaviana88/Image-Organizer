import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Modal, ModalBody } from 'components/Modal';
import AddImageForm from './AddImageForm';
import PhotographyDropzone from '../Photography';

import { fetchAlbum, setPlaces } from './actions';
import './styles.scss';
import MyMapComponent from './Map';
import PlacesWithStandaloneSearchBox from './Map/SearchBox';

const transformDateTimeToDate = dateString => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  });
};

class AlbumDetail extends React.Component {
  state = { imageUrl: null, openAddImage: false, isOpenGoogleMaps: false };

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  viewImage = imageUrl => {
    console.log(imageUrl);
    this.setState({ imageUrl });
  };

  closeImage = () => this.setState({ imageUrl: null });

  toggleGoogleMaps = () =>
    this.setState({ isOpenGoogleMaps: !this.state.isOpenGoogleMaps });

  closeAddImage = () => this.setState({ openAddImage: false });

  openAddImage = () => this.setState({ openAddImage: true });

  getAlbum = album => {
    return (
      <div className="">
        <div className="col-xs-11">
          <div className="row">
            <div className="col-xs-8">
              <h2 className="album-title">{album.title}</h2>
            </div>
            <div className="col-xs-4 album-dates">
              <span className="album-date-info">
                Created At: {transformDateTimeToDate(album.createdAt)}
              </span>
              <span className="album-date-info">
                Last update: {transformDateTimeToDate(album.createdAt)}
              </span>
            </div>
          </div>
          <div className="divider" />
          <div className="album-description">{album.description}</div>
          <div onClick={() => this.toggleGoogleMaps()}>Open Directions</div>
          <div className="album-dropzone">
            <PhotographyDropzone />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { imageUrl, openAddImage, isOpenGoogleMaps } = this.state;
    const { album } = this.props;

    return (
      <div className="album-container">
        {_.isNil(album) ? 'No album found' : this.getAlbum(album[0])}

        {imageUrl && (
          <Modal show={true} onCloseHandler={this.closeImage}>
            <ModalBody>
              <div className="view-image">
                <img src={'http://localhost:3001/static/' + imageUrl} />
              </div>
              <div>Tags and places here</div>
            </ModalBody>
          </Modal>
        )}
        {isOpenGoogleMaps ? (
          <Modal show={true} onCloseHandler={this.closeGoogleMaps}>
            <ModalBody>
              <div className="row">
                <div className="col-xs-8 map-container">
                  <MyMapComponent
                    isMarkerShown={false}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div>{'Loading'}</div>}
                    containerElement={
                      <div style={{ height: 500, width: 700 }} />
                    }
                    mapElement={<div style={{ height: 400 }} />}
                  />
                </div>
                <div className="col-xs-4 search-box-container">
                  <PlacesWithStandaloneSearchBox />
                </div>
              </div>
              <div className="save-direction-container">
                <button className="btn btn-primary save-directions-btn">
                  Save Directions
                </button>
              </div>
            </ModalBody>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album.album
  };
};

const mapDispatchToProps = {
  fetchAlbum,
  setPlaces
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
