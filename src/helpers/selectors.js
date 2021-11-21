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

// This follows the app but doesn't make any sense with the testing state

// export function getInterviewersForDay(state, day) {
//   const intArr = [];
//   for (const d of state.days) {
//     if (day === d.name) {
//       for(let app of d.appointments){
//         if (state.appointments[app].interview) {
//           //If there is an interview for that appointment grab the interviewer id
//           const interviewerId = state.appointments[app].interview.interviewer
//           intArr.push(state.interviewers[interviewerId])
//         }
//       }
//     }   
//   }
//   if (intArr.length > 0) return intArr;
//   return [];
// }


// This makes way more sense with app, but doesn't follow the test state
export function getInterviewersForDay(state, day) {
  const intArr = [];
  for (const d of state.days) {
    if (day === d.name) {
      for (const int of d.interviewers) {
        intArr.push(state.interviewers[int]);
      }
    }   
  }
  if (intArr.length > 0) return intArr;
  return [];
}