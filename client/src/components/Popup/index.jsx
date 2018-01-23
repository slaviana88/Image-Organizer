import React from 'react';
import {Portal} from 'react-portal';

import './styles.scss';

const Popup = ({togglePopup, children}) => {
  return (
    <Portal>
      <div className="popup-container">
        <div className="popup-close" onClick={togglePopup}>
          <i className="close-btn material-icons">clear</i>
        </div>
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="popup-container-content box">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
