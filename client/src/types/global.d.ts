// = type declarations =
declare global {
  type State = {
    days: Day[]
    appointments: Appointment[]
    interviewers: Interviewer[]
  };

  type Day = {
    name: string
    appointments: number[]
    interviewers: number[]
  };

  type Appointment = {
    id: number
  };

  type Interviewer = {
    id: number
  };

  type Interview = {
    interviewer: Interviewer['id'];
  };
}

export {};