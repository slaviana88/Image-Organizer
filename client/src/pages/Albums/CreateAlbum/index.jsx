import React from 'react';
import './styles.scss';

class CreateAlbum extends React.Component {
  render() {
    return (
      <div>
        Create album here
        <div>Choose a picture from eixsting or upload picture</div>
        Grad ang drop zone
        <div className="album-zone">
          <div className="albumbox" />
          <div className="select-picture">
            Choose picture
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAlbum;
