import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointment from "components/Appointment";
import DayList from "components/DayList";

import "styles/App.scss";

// = main App component =
export default function App() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  // get days
  useEffect(() => {
    axios.get('/api/days')
      .then((res) => {
        setState((prev) => ({ ...prev, days: res.data }));
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // get appointments
  useEffect(() => {
    axios.get('/api/appointments')
      .then((res) => {
        setState((prev) => ({ ...prev, appointments: { ...res.data } }));
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const setDay = (name) => { setState((prev) => ({ ...prev, name })); };

  const parsedAppointments = Object.values(state.appointments).map((apt) => (
    <Appointment key={apt.id} {...apt} />
  ));


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
        {parsedAppointments}
        <Appointment time="5pm" />
      </section>
    </main>
  );
}