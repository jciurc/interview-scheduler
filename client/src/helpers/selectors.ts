import 'types/global.d.ts';

// = functions =
export const getScheduleInfoForDay = (state: State, day: Day['name']) => {
  const foundDay = state.days.find((item: Day) => item.name === day);

  return {
    appointments: foundDay?.appointments.map((id) => state.appointments[id]) ?? [],
    interviewers: foundDay?.interviewers.map((id) => state.interviewers[id]) ?? [],
  };
};

// retrieves interview object from id
export const getInterview = (state: State, interview: Interview) => {
  return !interview ? null :
    { ...interview, interviewer: state.interviewers[interview.interviewer] };
};


// ----------
// = old indidivual functions - kept for jest tests =
export const getAppointmentsForDay = (state: State, day: Day['name']) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.appointments.map((id) => state.appointments[id]);
};

export const getInterviewersForDay = (state: State, day: Day['name']) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.interviewers.map((id) => state.interviewers[id]);
};
// ----------