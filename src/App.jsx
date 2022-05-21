import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointment from "components/Appointment";
import DayList from "components/DayList";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

import "styles/App.scss";

// = main App component =
export default function App() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (name) => { setState((prev) => ({ ...prev, day: name })); };

  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    );
  });


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
      .catch((e) => {
        console.error(e);
      });
  }, []);


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
        <Appointment time="5pm" />
      </section>
    </main>
  );
}