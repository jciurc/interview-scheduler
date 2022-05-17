import React from 'react';

import 'components/Button.scss';

export default function Button(props) {
  let buttonClass = "button";
  buttonClass += props.confirm ? ' button--confirm' : '';
  buttonClass += props.danger ? ' button--danger' : '';
  buttonClass += props.someOtherClass ? ' button--some-other-class' : '';

  return <button
    className={buttonClass}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>;
}