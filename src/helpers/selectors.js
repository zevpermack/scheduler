export function getAppointmentsForDay(state, day) {
  const appObj = [];
  for (const d of state.days) {
    if (day === d.name){
      for (const app of d.appointments) {
        appObj.push(state.appointments[app])
      }
      return appObj;
    }
  }
  return [];
}

export function getInterview(state, interview) {
  const retObj = {};
  if (interview) {
    retObj.student = interview.student;
    retObj.interviewer = {};
    retObj.interviewer = state.interviewers[interview.interviewer]
    return retObj
  }
  return null;
}