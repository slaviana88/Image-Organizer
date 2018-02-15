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
      defaultCenter={{ lat: 51.5073509, lng: -0.12775829999998223 }}
      ref={map =>
        map &&
        !_.isEmpty(props.places) &&
        map.panTo({
          lat: props.places[0].geometry.location.lat(),
          lng: props.places[0].geometry.location.lng()
        })}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 51.5073509, lng: -0.12775829999998223 }} />
      )}
    </GoogleMap>
  ))
);

const mapStateToProps = state => {
  return {
    places: state.album.places
  };
};

export default connect(mapStateToProps, {})(MyMapComponent);
