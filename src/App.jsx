import React, { useState } from "react";
import Appointment from "components/Appointment";
import DayList from "components/DayList";

import "styles/App.scss";


// test data
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default function App() {
  const [day, setDay] = useState('Monday');

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
            days={days}
            value={day}
            onChange={(name) => { setDay(name); }}
          />
        </nav>

      </section>
      <section className="schedule">
        <Appointment time="12" />
      </section>
    </main>
  );
}