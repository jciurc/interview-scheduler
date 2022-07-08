import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// = local helpers =
const updateSpots = (state: State, appointments: State['appointments']) => {
  // count null interviews for day
  const day = state.days.find((day) => day.name === state.day);
  const spots = day?.appointments.filter((id) => !appointments[id].interview).length;

  // copy days array and update selected day spots
  return state.days.map((day) => day.name === state.day ? { ...day, spots } : { ...day });
};


// = main hook function =
export default () => {
  // = App state =
  const [state, setState] = useState(<State> {
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
  const setDay = useCallback((day: Day) => { setState((prev) => ({ ...prev, day })); }, []);

  /**
   * @param {number} id id of appointment component
   * @param {object?} interview if no interview is given a delete request will be made, otherwise a put request will be made to update the existing appointment
   */
  const updateAppointment = useCallback(async (id: Appointment['id'], interview: Interview = null) => {
    // update db with new interview or delete interview
    return await (interview
      ? axios.put('/api/appointments/' + id, { interview })
      : axios.delete('/api/appointments/' + id)
    )
      // add or remove interview and recount spots
      .then((res) => {
        const appointment = { ...state.appointments[id], interview };
        const appointments = { ...state.appointments, [id]: appointment };
        const days = updateSpots(state, appointments);

        setState((prev) => ({ ...prev, appointments, days }));
      });
  }, [state]);

  return { state, setDay, updateAppointment };
};
