import React from 'react';

const renderInputField = ({
  input,
  type,
  placeholder,
  formErrors,
  meta: {touched, error, warning}
}) => {
  const fieldErrors = _.get(formErrors, input.name);
  console.log('tuk');
  return (
    <div>
      <div>
        <input
          className={`form-control ${!error && !warning && input.value
            ? ' is-valid'
            : ''}`}
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched &&
          ((error && <span className="invalid-feedback">{error}</span>) ||
            (warning && <span>{warning}</span>))}
        {touched &&
          (fieldErrors &&
            fieldErrors.map((error, index) => (
              <span className="invalid-feedback" key={index}>
                {error}
              </span>
            )))}
      </div>
    </div>
  );
};

export default renderInputField;
