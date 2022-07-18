import { ComponentStory, ComponentMeta } from '@storybook/react';

import Appointment from 'components/Appointment';
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
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
  component: Appointment,
  argTypes: {
    onAdd: { action: 'onAdd' },
    onEdit: { action: 'onEdit' },
    onDelete: { action: 'onDelete' },
    onCancel: { action: 'onCancel' },
    onConfirm: { action: 'onConfirm' },
  },
} as ComponentMeta<typeof Appointment>;

const Template: ComponentStory<typeof Appointment> = (args) => <Appointment {...args} interviewers={interviewers} />;

// variations
export const Default = Template.bind({});
Default.args = {
};

export const WithTime = Template.bind({});
WithTime.args = {
  time: '12pm',
};

export const HeaderTest: ComponentStory<typeof Header> = (args) => <Header time='12pm' />;