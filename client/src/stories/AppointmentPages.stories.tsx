import '../styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Appointment from 'components/Appointment';

// fixtures
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
] as IInterviewer[];

export default {
  component: Appointment,
  argTypes: {
    updateAppointment: { action: 'updateAppointment' },
    onAdd: { action: 'onAdd' },
    onEdit: { action: 'onEdit' },
    onDelete: { action: 'onDelete' },
    onCancel: { action: 'onCancel' },
    onSave: { action: 'onSave' },
    onConfirm: { action: 'onConfirm' },
    onClose: { action: 'onClose' },
  },
} as ComponentMeta<typeof Appointment>;

const Template: ComponentStory<typeof Appointment> = (args) => <>
  <Appointment {...args} interviewers={interviewers} />
  {/* // todo intercept onsave and ondelete handlers */}
  {/* <Appointment {...args} time="5pm" /> */}
</>;

// variations
export const AppointmentEmpty = Template.bind({});
AppointmentEmpty.args = {
  id: 1,
  time: '12pm',
};

export const AppointmentBooked = Template.bind({});
AppointmentBooked.args = {
  id: 1,
  time: '4pm',
  interview: { id: 1, student: "Lydia Miller-Jones", interviewer: interviewers[0] },
};
