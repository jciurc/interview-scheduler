export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return []

  return foundDay.appointments.map((id) => state.appointments[id]);
};


export function getInterview(state, interview) {
  return !interview ? null :
    { ...interview, interviewer: state.interviewers[interview.interviewer] };
};