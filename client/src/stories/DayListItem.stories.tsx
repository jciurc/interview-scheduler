import '../styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayListItem from 'components/DayListItem';

export default {
  component: DayListItem,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
} as ComponentMeta<typeof DayListItem>;

const Template: ComponentStory<typeof DayListItem> = (args) => <DayListItem {...args} />;

// variations
export const Unselected = Template.bind({});
Unselected.args = {
  name: 'Monday',
  spots: 5,
  selected: false,
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
