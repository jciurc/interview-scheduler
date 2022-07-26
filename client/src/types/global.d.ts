// = type definitions =
declare global {
  // functions
  type UpdateAppointment = (id: IAppointment['id'], interview?: IInterview | null) => Promise<Response | void>
  type ToggleDark = () => void;

  // variables
  type Student = string;
  type cssClass = string;

  // state
  interface IState {
    day: Day.name;
    days: IDay[];
    appointments: { [id: string]: IAppointment };
    interviewers: { [id: string]: IInterviewer };
  };

  interface IDay {
    id: number;
    name: string;
    spots?: number;
    appointments: Appointment.id[];
    interviewers: Interviewer.id[];
  };

  interface IAppointment {
    id: number;
    time: string;
    interview: IInterview | null;
  };

  interface IInterviewer {
    id: number;
    name: string;
    avatar: string;
  };

  interface IInterview {
    id?: number;
    interviewer: Interviewer.id;
    student: Student;
  };
};

export { };