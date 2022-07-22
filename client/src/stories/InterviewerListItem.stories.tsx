import '../styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InterviewerListItem from 'components/InterviewerListItem';

// fixtures
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

export default {
  component: InterviewerListItem,
  argTypes: {
    setInterviewer: { action: 'setInterviewer' },
  },
} as ComponentMeta<typeof InterviewerListItem>;

const Template: ComponentStory<typeof InterviewerListItem> = (args) => <InterviewerListItem  {...interviewer} {...args} />;

// variations
export const Unselected = Template.bind({});
Unselected.args = {
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
