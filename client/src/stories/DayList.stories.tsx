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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: DayList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    days,
    setDay: { action: 'setDay' }
  },
} as ComponentMeta<typeof DayList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DayList> = (args) => <DayList {...args} />;

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
