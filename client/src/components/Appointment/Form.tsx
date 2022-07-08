import { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

// = type definitions =
interface Props {
  interviewers: Interviewer[];
  student?: Student;
  interviewer?: Interviewer;
  onCancel: () => void;
  onSave: (student: Student, interviewerID: number) => void;
};

const Form = (props: Props) => {
  const [error, setError] = useState('');
  const [student, setStudent] = useState(props.student || '');
  const [interviewerID, setInterviewer] = useState((props.interviewer?.id) || null);
  const reset = (cb: Function) => {
    setError('');
    setStudent('');
    setInterviewer(null);
    cb();
  };

  // = helpers =
  const validate = () => {
    if (student === '') return setError('Please enter a name');
    if (interviewerID === null) return setError('Please select an interviewer');
    setError('');
    props.onSave(student, interviewerID);
  };

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
          <input
            className='appointment__create-input text--semi-bold'
            name='name'
            type='text'
            placeholder='Enter Student Name'
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid={'student-name-input'}
          />
        </form>

        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewerID}
          handleChange={setInterviewer}
        />
      </section>

      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button danger handleClick={() => { reset(props.onCancel); }}>Cancel</Button>
          <Button confirm handleClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;