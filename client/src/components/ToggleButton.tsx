import './styles/toggleButton.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface IToggleProps {
  toggleDark: ToggleDark;
};

// trying out class component for fun
export default class ToggleButton extends React.Component<IToggleProps> {
  constructor(props: IToggleProps) {
    super(props);
  };

  render(): React.ReactNode {
    return (<section className='toggle' onClick={this.props.toggleDark}>
      <FontAwesomeIcon icon={faMoon} className='fa-moon' />
      <FontAwesomeIcon icon={faSun} className='fa-sun' />
    </section>)
  }
};
