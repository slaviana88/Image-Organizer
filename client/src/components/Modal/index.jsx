import React from 'react';

import './styles.scss';

const ModalBody = props => {
  return <div className="tc-modal-body">{props.children}</div>;
};

const ModalFooter = props => {
  return <div className="tc-modal-footer">{props.children}</div>;
};

const Modal = props => {
  if (!props.show) return null;

  const {
    title,
    onCloseHandler,
    children,
    className,
    noPadding,
    titleAlign,
    autoClose = false
  } = props;

  const autoCloseHandler = event => {
    if (
      event.target.classList.contains('tc-modal-dim') ||
      event.target.classList.contains('tc-modal-window')
    ) {
      onCloseHandler(event);
    }
  };

  return (
    <div className="tc-modal-dim" onClick={autoClose ? autoCloseHandler : null}>
      <div className="tc-modal-window">
        <div
          className={`tc-modal-holder${noPadding
            ? ' no-body-padding'
            : ''}${className ? ` ${className}` : ''}`}>
          <div className="tc-modal-header">
            <div
              className={`tc-modal-title${titleAlign ? ` ${titleAlign}` : ''}`}>
              {title}
            </div>
            <div className="tc-modal-close-button" onClick={onCloseHandler}>
              <i className="material-icons">&#xE5CD;</i>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export {Modal, ModalBody, ModalFooter};
