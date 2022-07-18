import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from "components/Appointment/Form";

// fixtures
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
] as Interviewer[];

export default {
  component: Form,
  argTypes: {
    onCancel: { action: 'onCancel' },
    onSave: { action: 'onSave' },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} interviewers={interviewers} />;

// variations
export const Create = Template.bind({});
Create.args = {
  student: '',
};

export const Edit = Template.bind({});
Edit.args = {
  student: 'Somebody',
  interviewer: interviewers[2],
};
