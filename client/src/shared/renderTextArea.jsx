import React from 'react';

const renderTextArea = ({input}) => {
  return (
    <div>
      <textarea {...input} className="form-control" />
    </div>
  );
};

export default renderTextArea;
