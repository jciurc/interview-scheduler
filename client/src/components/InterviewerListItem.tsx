import './styles/interviewerListItem.scss';

// = type definitions =
interface Props {
  selected: boolean;
  name: Interviewer['name'];
  avatar: Interviewer['avatar'];
  setInterviewer: () => void;
};


const InterviewerListItem: React.FC<Props> = (props) => {
  const interviewerClass: cssClass = 'interviewers__item '
    + (props.selected ? 'interviewers__item--selected ' : '');

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img className={'interviewers__item-image'} src={props.avatar} alt={props.name + ' profile picture'} />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;