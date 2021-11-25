import React from 'react';
import 'components/Appointment/styles.scss';
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CANCELLING = "CANCELLING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    })
    
  }

  function confirm() {
    transition(CONFIRM);
  }

  function cancel() {
    transition(CANCELLING);
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY);
    })
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === CONFIRM && <Confirm onConfirm={cancel} onCancel={() => back()} message="Are you sure you want to delete?"/>}
      {mode === CANCELLING && <Status message="Deleting"/>}
      {mode === SAVING && <Status message="Saving"/>}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirm}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save}  />}
      {mode === EDIT && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} interviewer={props.interview.interviewer.id} student={props.interview.student} />}
    </article>
  );
}
