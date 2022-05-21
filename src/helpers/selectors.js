export const getAppointmentsForDay = (state, day) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return []

  return foundDay.appointments.map((id) => state.appointments[id]);
};

export const getInterview = (state, interview)=> {
  return !interview ? null :
    { ...interview, interviewer: state.interviewers[interview.interviewer] };
};

export const getInterviewersForDay = (state, day) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return []

  return foundDay.interviewers.map((id) => state.interviewers[id]);
};