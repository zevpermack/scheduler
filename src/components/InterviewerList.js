import InterviewerListItem from "./InterviewerListItem";
import 'components/InterviewerList.scss'
import React from 'react';

export default function InterviewerList(props) {
  const {value, onChange} = props
  const interviewerList = props.interviewers.map(interviewer => {
    return(
    <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === value}
    setInterviewer={() => onChange(interviewer.id)}
    />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
      {interviewerList}
    </section>
  );
}