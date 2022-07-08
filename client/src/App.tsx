import "./styles/App.scss";

import Appointment from "components/Appointment";

// = main component =
const App = () => {

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
        </nav>

      </section>
      <section className="schedule">
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
};

export default App;