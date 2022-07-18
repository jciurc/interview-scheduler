import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayList from 'components/DayListItem';

// fixtures
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default {
  component: DayList,
  argTypes: {
    days,
    setDay: { action: 'setDay' },
  },
} as ComponentMeta<typeof DayList>;

const Template: ComponentStory<typeof DayList> = (args) => <DayList {...args} />;

// variations
export const Monday = Template.bind({});
Monday.args = {
  name: 'Monday',
  spots: 3,
  selected: true,
};

export const Tuesday = Template.bind({});
Tuesday.args = {
  name: 'Tuesday',
  spots: 2,
};

export const Wednesday = Template.bind({});
Wednesday.args = {
  name: 'Wednesday',
  spots: 0,
};
