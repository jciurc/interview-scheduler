import './styles/toggleButton.scss';
import React from 'react';

interface IToggleProps {
  toggleDark: ToggleDark;
};

// trying out class component for fun
export default class ToggleButton extends React.Component {
  constructor(props: IToggleProps) {
    super(props);
  };

  render(): React.ReactNode {
    return (<section className='toggle' onClick={this.props.toggleDark}>hello</section>)
  }
};
