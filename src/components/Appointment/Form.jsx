import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default (props) => {
  const [student, setStudent] = useState(props.student || ''); // string - student name
  const [interviewerId, setInterviewer] = useState(props.interviewer && props.interviewer.id || null); // null or id number
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
          value={interviewerId}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => { reset(props.onCancel); }}>Cancel</Button>
          <Button confirm onClick={()=> {props.onSave(student, interviewerId)}}>Save</Button>
        </section>
      </section>
    </main>
  );
};