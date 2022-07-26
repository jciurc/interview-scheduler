// = functions =
export const getScheduleInfoForDay = (state: IState, day: IDay['name']) => {
  const foundDay = state.days.find((item: IDay) => item.name === day);

  return {
    appointments: foundDay?.appointments.map((id) => state.appointments[id]) ?? [],
    interviewers: foundDay?.interviewers.map((id) => state.interviewers[id]) ?? [],
  };
};

// retrieves interview object from id
export const getInterview = (state: IState, interview: IInterview | null) => {
  return !interview ? null :
    { ...interview, interviewer: state.interviewers[interview.interviewer] };
};


// ----------
// = old indidivual functions - kept for jest tests =
export const getAppointmentsForDay = (state: IState, day: IDay['name']) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.appointments.map((id) => state.appointments[id]);
};

export const getInterviewersForDay = (state: IState, day: IDay['name']) => {
  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  return foundDay.interviewers.map((id) => state.interviewers[id]);
};
// ----------