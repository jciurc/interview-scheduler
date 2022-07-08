import InterviewerListItem from "./InterviewerListItem";
import "./styles/InterviewerList.scss";
import PropTypes from 'prop-types';

// = type declarations =
interface Props {
  interviewers: Interviewer[];
  value: Interviewer['id'];
  student: Student;
  onSave: Function;
};

const InterviewerList: React.FC<Props> = (props) => {
  const interviewers = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />)
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InterviewerList;