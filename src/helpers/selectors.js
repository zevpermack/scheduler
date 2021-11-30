export function getAppointmentsForDay(state, day) {
  const appObj = [];
  for (const d of state.days) {
    if (day === d.name) {
      for (const app of d.appointments) {
        appObj.push(state.appointments[app])
      }
      return appObj;
    }
  }
  return appObj;
}

export function getInterview(state, interview) {
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
    }
  }
  return null;
}


export function getInterviewersForDay(state, day) {
  const intArr = [];
  for (const d of state.days) {
    if (day === d.name) {
      for (const interviewerId of d.interviewers) {
        intArr.push(state.interviewers[interviewerId]);
      }
      return intArr
    }
  }
  return intArr;
}

export function setSpots(state, day, appointments) {
  const newDays = state.days.map((d) => {
    if (day === d.name) {
      let spots = 0;
      for (const appointment of d.appointments) {
        if (!appointments[appointment].interview) {
          spots += 1;
        }
      }
      const newDay = { ...d, spots };
      return newDay;
    }
    return d;
  });
  return newDays;
}