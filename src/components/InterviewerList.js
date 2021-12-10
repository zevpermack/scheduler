import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';
import React from 'react';
import PropTypes from 'prop-types';

function InterviewerList(props) {
  const { value, onChange } = props;
  const interviewerList = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={() => onChange(interviewer.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
