import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayListItem from 'components/DayListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: DayListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof DayListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DayListItem> = (args) => <DayListItem {...args} />;


export const Base = Template.bind({});
Base.args = {
};

export const Confirm = Template.bind({});
Confirm.args = {
};

export const Danger = Template.bind({});
Danger.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
};
