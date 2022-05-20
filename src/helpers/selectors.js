export function getAppointmentsForDay(state, day) {
  if (!state.days.length) return [];

  const foundDay = state.days.find((item) => item.name === day);
  if (!foundDay) return [];

  const filteredApts = Object.values(state.appointments).filter((app) => (
    foundDay.appointments.includes(app.id)
  ));

  return filteredApts;
};