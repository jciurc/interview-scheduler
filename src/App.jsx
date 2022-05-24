import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointment from "components/Appointment";
import DayList from "components/DayList";
import { getScheduleInfoForDay, getInterview } from "helpers/selectors";

import "styles/App.scss";


// = main component =
const App = () => {
  // = state =
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });


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


  // = selectors =
  const { appointments, interviewers } = getScheduleInfoForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={interviewers}
        interview={interview}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
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


  // = render component =
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />

        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>

      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
};

export default App;