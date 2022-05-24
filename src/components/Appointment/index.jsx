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
const SHOW = 'SHOW';
const EMPTY = 'EMPTY';
const CREATE = 'CREATE';

export default (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // = helpers =
  const save = (student, interviewer) => {
    const interview = {
      student,
      interviewer: interviewer,
    };
    props.bookInterview(props.id, interview);
    transition(SHOW);
  };

  // = render component =
  return (
    <article className='appointment'>
      {props.time && <Header time={props.time} />}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show {...props.interview} onEdit={() => transition(CREATE)} />}
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