import "./styles/App.scss";

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
      </section>
    </main>
  );
};

export default App;