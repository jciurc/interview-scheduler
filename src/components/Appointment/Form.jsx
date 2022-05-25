import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import PropTypes from 'prop-types';

const Form = (props) => {
  const [student, setStudent] = useState(props.student || ''); // string - student name
  const [interviewerID, setInterviewer] = useState((props.interviewer && props.interviewer.id) || null); // number
  const reset = (cb) => {
    setStudent('');
    setInterviewer(null);
    cb();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewerID}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => { reset(props.onCancel); }}>Cancel</Button>
          <Button confirm onClick={() => { props.onSave(student, interviewerID); }}>Save</Button>
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