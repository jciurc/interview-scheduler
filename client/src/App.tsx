import 'styles/App.scss';
import { getScheduleInfoForDay, getInterview } from 'helpers/selectors';
import useApplicationData from 'hooks/useApplicationData';
import Appointment from 'components/Appointment';
import DayList from 'components/DayList';

// = main component =
const App: React.FC = () => {
  // get and set pre-render data
  const { state, setDay, updateAppointment } = useApplicationData();

  // = selectors =
  const { appointments, interviewers } = getScheduleInfoForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={interviewers}
        interview={getInterview(state, appointment.interview)}
        updateAppointment={updateAppointment}
      />
    );
  });

  // = render component =
  return (
    <main className='layout'>
      <section className='sidebar'>
        <img
          className='sidebar--centered'
          src='images/logo.png'
          alt='Interview Scheduler'
        />
        <hr className='sidebar__separator sidebar--centered' />

        <nav className='sidebar__menu'>
          <DayList
            days={state.days}
            value={state.day}
            setDay={setDay}
          />
        </nav>

      </section>
      <section className='schedule'>
        {schedule}
        <Appointment key='last' time='5pm' id={0} interviewers={[]} interview={null} />
      </section>
    </main>
  );
};

export default App;