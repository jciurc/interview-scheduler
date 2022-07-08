// = type declarations =
declare global {
  type State = {
    day: Day.name
    days: Day[]
    appointments: Appointment[]
    interviewers: Interviewer[]
  };

  type Day = {
    name: string
    appointments: Appointment.id[]
    interviewers: Interviewer.id[]
  };

  type Appointment = {
    id: number
    interview: Interview
  };

  type Interviewer = {
    id: number
  };

  type Interview = {
    interviewer: Interviewer.id;
  } | null;
}

export { };