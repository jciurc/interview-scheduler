// combined functions
export const getScheduleInfoForDay = (state, day) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return {appointments: [], interviewers: []};

  return {
    appointments: foundDay.appointments.map((id) => state.appointments[id]),
    interviewers: foundDay.interviewers.map((id) => state.interviewers[id]),
  };
};

// retrieves interview object from id
export const getInterview = (state, interview) => {
  return !interview ? null :
    { ...interview, interviewer: state.interviewers[interview.interviewer] };
};


// ----------
// = old indidivual functions - kept for jest tests =
export const getAppointmentsForDay = (state, day) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.appointments.map((id) => state.appointments[id]);
};

export const getInterviewersForDay = (state, day) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.interviewers.map((id) => state.interviewers[id]);
};
// ----------