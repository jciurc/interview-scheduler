import '../styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Appointment from 'components/Appointment';
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";

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
    updateAppointment: { action: 'updateAppointment' },
    onAdd: { action: 'onAdd' },
    onEdit: { action: 'onEdit' },
    onDelete: { action: 'onDelete' },
    onCancel: { action: 'onCancel' },
    onConfirm: { action: 'onConfirm' },
    onClose: { action: 'onClose' },
  },
} as ComponentMeta<typeof Appointment>;


// individual modes
export const HeaderShow: ComponentStory<typeof Header> = (args) => <Header {...args} time='12pm' />;

export const EmptyMode: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const ShowMode: ComponentStory<typeof Show> = (args) => (<Show {...args}
  student='hello'
  interviewer={interviewers[0]}
/>);

export const ConfirmMode: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;

export const StatusSaving: ComponentStory<typeof Status> = (args) => <Status {...args} status='Saving' />;
export const StatusDeleting: ComponentStory<typeof Status> = (args) => <Status {...args} status='Deleting' />;

export const ErrorSave: ComponentStory<typeof Error> = (args) => <Error {...args} type='save' />;
export const ErrorDelete: ComponentStory<typeof Error> = (args) => <Error {...args} type='cancel' />;