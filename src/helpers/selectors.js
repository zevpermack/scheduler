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
  return appObj;
}

export function getInterview(state, interview) {
  if (interview) {
    return {
      student : interview.student, 
      interviewer : state.interviewers[interview.interviewer]
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