export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.appointments.map((k) => state.appointments[k])
};


export function getInterview(state, interview) {
  return !interview ? interview :
  {...interview, interviewer: state.interviewers[interview.interviewer]}
};