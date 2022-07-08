// = type declarations =
declare global {
  interface State {
    day: Day.name
    days: Day[]
    appointments: { [key: string]: Appointment }
    interviewers: { [key: string]: Interviewer }
  };

  interface Day {
    name: string
    appointments: Appointment.id[]
    interviewers: Interviewer.id[]
  };

  interface Appointment {
    id: number
    interview: Interview
  };

  interface Interviewer {
    id: number
  };

  type Interview = {
    interviewer: Interviewer.id
  } | null;
};

export {};