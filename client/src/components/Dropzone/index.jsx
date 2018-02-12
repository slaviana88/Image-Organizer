import React from 'react';
import Dropzone from 'react-dropzone';

export const dropzoneField = dropzone => field => {
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

