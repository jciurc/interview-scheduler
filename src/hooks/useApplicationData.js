import { useReducer, useEffect } from "react";
import axios from "axios";

// = local helpers =
const updateSpots = (state, appointments) => {
  // count null interviews for day
  const day = state.days.find((day) => day.name === state.day);
  const spots = day.appointments.filter((id) => !appointments[id].interview).length;

  // copy days array and update current day spots
  return state.days.map((day) => (
    (day.name === state.day) ? { ...day, spots } : { ...day }
  ));
};

// = constants =
const SET_DAY = 'SET_DAY';
const SET_STATE = 'SET_STATE';
const SET_INITIAL = 'SET_INITIAL';
const actions = {
  SET_INITIAL(state, { days, appointments, interviewers }) { return { ...state, days, appointments, interviewers }; },
  SET_DAY(state, { day }) { return { ...state, day }; },
  SET_STATE(state, { appointments, days }) { return { ...state, appointments, days }; },
};

const reducer = (state, { type, values }) => {
  return actions[type](state, values);
};

// = main hook function =
export default () => {
  // = App state =
  const [state, dispatch] = useReducer(reducer, {
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
        dispatch({
          type: SET_INITIAL, values: {
            days: res[0].data,
            appointments: { ...res[1].data },
            interviewers: { ...res[2].data },
          }
        });
      })
      .catch((e) => { console.error(e); });
  }, []);

  // = exported helpers =
  const setDay = (day) => { dispatch({ type: SET_DAY, values: { day } }); };
  /**
   * @param {number} id id of appointment component
   * @param {object?} interview if no interview is given a delete request will be made, otherwise a put request will be made to update the existing appointment
   */
  const updateAppointment = (id, interview = null) => {
    // update db with new interview or delete interview
    return (interview
      ? axios.put('/api/appointments/' + id, { interview })
      : axios.delete('/api/appointments/' + id)
    )
      .then((res) => {
        // add or remove interview
        const appointment = { ...state.appointments[id], interview };
        const appointments = { ...state.appointments, [id]: appointment };

        // recount spots
        const days = updateSpots(state, appointments);
        dispatch({ type: SET_STATE, values: { appointments, days } });
      });
  };

  return { state, setDay, updateAppointment };
};