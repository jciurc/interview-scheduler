import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Base = Template.bind({});
Base.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// };

// export const Large = Template.bind({});
// Large.args = {
// };

// export const Small = Template.bind({});
// Small.args = {
// };
