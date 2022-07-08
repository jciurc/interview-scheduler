// = type declarations =
declare global {

  interface State {
    day: Day.name;
    days: Day[];
    appointments: { [id: string]: Appointment };
    interviewers: { [id: string]: Interviewer };
  };

  interface Day {
    name: string;
    appointments: Appointment.id[];
    interviewers: Interviewer.id[];
  };

  interface Appointment {
    id: number;
    time: string;
    interview: Interview;
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

  type Student = string;
};

export { };