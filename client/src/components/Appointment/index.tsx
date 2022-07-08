import useVisualMode from 'hooks/useVisualMode';
import './styles.scss';

// components
import Confirm from './Confirm';
import Empty from './Empty';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

// appointment modes
const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const FORM = 'FORM';
const SAVING = 'SAVING';
const CONFIRM = 'CONFIRM';
const DELETING = 'DELETING';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';


// = type declarations =
interface Props {
  // 5pm appointment doesn't require all properties
  time: Appointment['time'];
  id?: Interview['id'];
  interviewers?: State['interviewers'];
  interview?: Interview | null;
  updateAppointment?: Function;
};

// = main function =
const Appointment: React.FC<Props> = (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // = helpers =
  /**
   * @param {string} student student name
   * @param {number} interviewer interviewer id
   */
  const save = (student: Student, interviewer: Interviewer) => {
    // accept but don't make post request if no new changes
    if (props.interview && (
      student === props.interview.student &&
      interviewer === props.interview.interviewer.id)) {
      back();
      return;
    };

    // submit information in put request
    transition(SAVING);
    const interview = { student, interviewer, };
    props.updateAppointment?.(props.id, interview)
      .then((res: Response) => { transition(SHOW); })
      .catch((err: Response) => { transition(ERROR_SAVE, true); });
  };

  // submit delete request in app.js
  const confirmDelete = () => {
    transition(DELETING, true);
    props.updateAppointment?.(props.id)
      .then((res: Response) => { transition(EMPTY); })
      .catch((err: Response) => { transition(ERROR_DELETE, true); });
  };

  // render component
  return (
    <article className='appointment'>
      {props.time && <Header time={props.time} />}

      {(() => {
        // iife for slight optimization to break early
        if (mode === EMPTY) return <Empty onAdd={() => transition(FORM)} />;
        if (mode === SHOW) return <Show {...props.interview} onEdit={() => transition(FORM)} onDelete={() => { transition(CONFIRM); }} />;
        if (mode === FORM) return <Form {...props.interview} interviewers={props.interviewers} onCancel={back} onSave={save} />;
        if (mode === SAVING) return <Status status='Saving' />;
        if (mode === CONFIRM) return <Confirm onCancel={back} onConfirm={confirmDelete} />;
        if (mode === DELETING) return <Status status='Deleting' />;
        if (mode === ERROR_SAVE) return <Error type='save' onClose={back} />;
        if (mode === ERROR_DELETE) return <Error type='cancel' onClose={back} />;
      })()}
    </article>
  );
};

export default Appointment;