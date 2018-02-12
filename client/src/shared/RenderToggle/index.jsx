import React from 'react';

const renderToggle = ({ input }) => {
  const isChecked = input.value ? 'checked' : '';
  return (
    <label className="switch">
      <input {...input} type="checkbox" checked={isChecked} />
      <span className="slider round" />
    </label>
  );
};

export default renderToggle;
