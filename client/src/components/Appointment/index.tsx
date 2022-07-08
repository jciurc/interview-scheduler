import './styles.scss';

// 5pm appointment doesn't require all properties
type Props = {
  time: string,
  id?: number,
  interviewers?: [],
  interview?: object,
  updateAppointment?: Function,
};

// = main function =
const Appointment = (props: Props) => {
  // render component
  return (
    <article className='appointment'>
      hello appointment
    </article>
  );
};

export default Appointment;