import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  // = state =
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // = effects =
  // get interview data from database on page load
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ])
      .then((res) => {
        setState((prev) => ({
          ...prev,
          days: res[0].data,
          appointments: { ...res[1].data },
          interviewers: { ...res[2].data },
        }));
      })
      .catch((e) => { console.error(e); });
  }, []);

  // = helpers =
  const setDay = (day) => { setState((prev) => ({ ...prev, day })); };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };


    return axios.put('/api/appointments/' + id, { interview })
      .then((res) => {
        setState((prev) => ({
          ...prev,
          appointments,
        }));
        return 'done';
      });
  };


  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete('/api/appointments/' + id)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          appointments,
        }));
        return 'done deleting';
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};