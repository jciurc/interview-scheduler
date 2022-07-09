import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';
import PropTypes from 'prop-types';

const Form = (props) => {
  const [error, setError] = useState('');
  const [student, setStudent] = useState(props.student || ''); // student name
  const [interviewerID, setInterviewer] = useState((props.interviewer && props.interviewer.id) || null); // number
  const reset = (cb) => {
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
          onChange={setInterviewer}
        />
      </section>

      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button danger onClick={() => { reset(props.onCancel); }}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};

Form.propTypes = {
  interviewers: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  student: PropTypes.string,
  interviewer: PropTypes.object,
};

export default Form;