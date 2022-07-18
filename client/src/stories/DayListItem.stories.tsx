import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayListItem from 'components/DayListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: DayListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'handleClick' }
  },
} as ComponentMeta<typeof DayListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DayListItem> = (args) => <DayListItem {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  name: 'Monday',
  spots: 5,
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'Monday',
  spots: 5,
  selected: true,
};

export const Full = Template.bind({});
Full.args = {
  name: 'Monday',
  spots: 0,
};
