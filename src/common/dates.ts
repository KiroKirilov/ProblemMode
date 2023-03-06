export const getTimeOfDayString = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 5) {
    return "Night"
  } else if (currentHour < 12) {
    return "Morning"
  } else if (currentHour < 17) {
    return "Afternoon"
  } else if (currentHour < 23) {
    return "Evening"
  } else {
    return "Night"
  }
}