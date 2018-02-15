import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.latitude, lng: props.longtitude }}
      ref={map =>
        map &&
        !_.isEmpty(props.places) &&
        map.panTo({
          lat: props.places[0].geometry.location.lat(),
          lng: props.places[0].geometry.location.lng()
        })}>
      {props.isMarkerShown && (
        <Marker position={{ lat: props.latitude, lng: props.longtitude }} />
      )}
    </GoogleMap>
  ))
);

const mapStateToProps = state => {
  return {
    places: state.album.places,
    longtitude: _.isNil(state.album.album[0].longtitude)
      ? -0.12775829999998223
      : state.album.album[0].longtitude,
    latitude: _.isNil(state.album.album[0].latitude)
      ? 51.5073509
      : state.album.album[0].latitude
  };
};

export default connect(mapStateToProps, {})(MyMapComponent);
