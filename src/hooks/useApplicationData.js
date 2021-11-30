import { useState, useEffect } from "react";
import axios from "axios";
import { setSpots } from "helpers/selectors";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {


    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
 
    const days = setSpots(state, state.day, appointments);
    
    return axios.put(`/api/appointments/${id}`, {'interview': interview})
      .then((res) => {
        setState({ ...state, appointments, days });
      })
      
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview : null
    };
    const appointments = {
      ...state.appointments,
      [id] : appointment
    };

    const days = setSpots(state, state.day, appointments);
    return axios.delete(`api/appointments/${id}`)
      .then((res) => {
          setState({ ...state, appointments, days })
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, [])

  return {state, setDay, bookInterview, cancelInterview}
}