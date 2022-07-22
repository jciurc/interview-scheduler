// = type definitions =
declare global {
  // functions
  type UpdateAppointment = (id: Appointment['id'], interview?: Interview | null) => Promise<Response | void>

  // variables
  type Student = string;
  type cssClass = string;

  // state
  interface State {
    day: Day.name;
    days: Day[];
    appointments: { [id: string]: Appointment };
    interviewers: { [id: string]: Interviewer};
  };

  interface Day {
    id: number;
    name: string;
    spots?: number;
    appointments: Appointment.id[];
    interviewers: Interviewer.id[];
  };

  interface Appointment {
    id: number;
    time: string;
    interview: Interview | null;
  };

  interface Interviewer {
    id: number;
    name: string;
    avatar: string;
  };

  interface Interview {
    id?: number;
    interviewer: Interviewer.id;
    student: Student;
  };
};

export { };