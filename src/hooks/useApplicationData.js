import { useState, useEffect } from "react";
import axios from "axios";

// = local helpers =
const getDaySpots = (state, appointments) => {
  const index = state.days.findIndex((day) => day.name === state.day);
  const spots = state.days[index].appointments.filter((id) => !appointments[id].interview).length;
  return { index, spots };
};

const updateSpots = (state, appointments) => {
  const { index, spots } = getDaySpots(state, appointments);
  const days = [...state.days];
  days[index] = { ...state.days[index], spots };
  return days;
};

// = main hook function =
export default () => {
  // = App state =
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // = effects =
  // get interview data from database on initial page load
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

  // = exported helpers =
  const setDay = (day) => { setState((prev) => ({ ...prev, day })); };
  const updateAppointment = (id, interview = null) => {
    // add or remove interview
    const appointment = { ...state.appointments[id], interview };
    const appointments = { ...state.appointments, [id]: appointment };

    // recount spots
    const days = updateSpots(state, appointments);

    // update db with new interview or delete interview
    return (interview
      ? axios.put('/api/appointments/' + id, { interview })
      : axios.delete('/api/appointments/' + id)
    )
      .then((res) => {
        setState((prev) => ({ ...prev, appointments, days }));
      });
  };

  return { state, setDay, updateAppointment };
};