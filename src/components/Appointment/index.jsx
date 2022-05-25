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
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';

export default (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // = helpers =
  /**
   * @param {string} student student name
   * @param {number} interviewer interviewer id
   */
  const save = (student, interviewer) => {
    // accept but don't make post request if no new changes
    if (student === props.interview.student &&
      interviewer === props.interview.interviewer.id) {
      back();
      return;
    };

    // submit information in axios request
    transition(SAVING);
    const interview = { student, interviewer, };
    props.updateAppointment(props.id, interview)
      .then((res) => { transition(SHOW); })
      .catch((err) => { transition(ERROR_SAVE, true); });
  };

  const confirmDelete = () => {
    // make axios delete request in app.js
    transition(DELETING, true);
    props.updateAppointment(props.id)
      .then((res) => { transition(EMPTY); })
      .catch((err) => { transition(ERROR_DELETE, true); });
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
      {mode === ERROR_SAVE && <Error type='save' onClose={back} />}
      {mode === ERROR_DELETE && <Error type='cancel' onClose={back} />}
    </article>
  );
};