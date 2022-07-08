import InterviewerListItem from "./InterviewerListItem";
import "./styles/InterviewerList.scss";

// = type declarations =
interface Props {
  interviewers: Interviewer[];
  value: Interviewer['id'] | null;
  student: Student;
  onChange: (id: Interviewer['id']) => void;
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

export default InterviewerList;