import React from 'react';

interface IToggleProps {
  name?: 'string';
}

// trying out class component for fun
export default class ToggleButton extends React.Component {
  constructor(props: IToggleProps) {
    super(props)
  }

  render(): React.ReactNode {
    return (<section>hello</section>)
  }
};

