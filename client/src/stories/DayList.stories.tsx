import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayList from 'components/DayList';

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
] as Day[];

export default {
  component: DayList,
  argTypes: {
    setDay: { action: 'setDay' },
  },
} as ComponentMeta<typeof DayList>;

const Template: ComponentStory<typeof DayList> = (args) => <DayList {...args} days={days} />;

// variations
export const Monday = Template.bind({});
Monday.args = {
  value: 'Monday',
};

export const Tuesday = Template.bind({});
Tuesday.args = {
  value: 'Tuesday',
};

export const Wednesday = Template.bind({});
Wednesday.args = {
  value: 'Wednesday',
};
