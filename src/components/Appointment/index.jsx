import React from 'react';
import useVisualMode from 'hooks/useVisualMode';
import './styles.scss';

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
const ERROR = 'ERROR';

export default (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // = helpers =
  /**
   * @param {string} student student name
   * @param {number} interviewer interviewer id
   */
  const save = (student, interviewer) => {
    if (!student || !interviewer) return;
    if (props.interview && (
      student === props.interview.student &&
      interviewer === props.interview.interviewer.id)) {
      back();
      return;
    };

    const interview = {
      student,
      interviewer,
    };

    // make axios put request in app.js
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then((res) => {
        transition(SHOW);
      })
      .catch((err) => {
        console.error(err);
        back();
      });
  };

  const confirmDelete = () => {
    // make axios put request in app.js
    transition(DELETING);
    props.cancelInterview(props.id)
      .then((res) => {
        transition(EMPTY);
      })
      .catch((err) => {
        transition(ERROR);
        console.error(err);
      });
  };


  // = render component =
  return (
    <article className='appointment'>
      {props.time && <Header time={props.time} />}

      {mode === EMPTY && <Empty onAdd={() => transition(FORM)} />}
      {mode === SHOW && <Show {...props.interview} onEdit={() => transition(FORM)} onDelete={() => { transition(CONFIRM); }} />}
      {mode === FORM && <Form {...props.interview} interviewers={props.interviewers} onCancel={back} onSave={save} />}
      {mode === SAVING && <Status status='Saving' />}
      {mode === CONFIRM && <Confirm onCancel={back} onConfirm={confirmDelete} />}
      {mode === DELETING && <Status status='Deleting' />}
      {mode === ERROR && <Error onClose={back} />}
    </article>
  );
};