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