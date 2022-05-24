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
const SAVING = 'SAVING';
const CREATE = 'CREATE';

export default (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // = helpers =
  /**
   * @param {string} student student name
   * @param {number} interviewer interviewer id
   */
  const save = (student, interviewer) => {
    if (!student || !interviewer) return;
    if (student === props.interview.student &&
      interviewer === props.interview.interviewer.id) {
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


  // = render component =
  return (
    <article className='appointment'>
      {props.time && <Header time={props.time} />}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show {...props.interview} onEdit={() => transition(CREATE)} />}
      {mode === SAVING && <Status />}
      {mode === CREATE && (
        <Form
          {...props.interview}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}

    </article>
  );
};