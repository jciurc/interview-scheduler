import '../styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// variations
export const Base = Template.bind({});
Base.args = {
  children: 'Base'
};

export const Confirm = Template.bind({});
Confirm.args = {
  confirm: true,
  children: 'Confirm'
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  children: 'Danger'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled'
};
