import { ComponentStory, ComponentMeta } from '@storybook/react';

import InterviewerList from 'components/InterviewerList';

// fixtures
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
] as Interviewer[];

export default {
  component: InterviewerList,
  argTypes: {
    handleChange: { action: 'handleChange' },
  },
} as ComponentMeta<typeof InterviewerList>;

const Template: ComponentStory<typeof InterviewerList> = (args) => <InterviewerList {...args} interviewers={interviewers} />;

// variations
export const Initial = Template.bind({});
Initial.args = {
};

export const Selected = Template.bind({});
Selected.args = {
  value: 3,
};
