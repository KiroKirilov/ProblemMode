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

export const getStartOfWeek = (date: Date) => {
  const dayOfWeek = date.getUTCDay();
  const daysSinceStartOfWeek = (dayOfWeek + 6) % 7;
  const startOfWeek = new Date(date.getTime() - daysSinceStartOfWeek * 24 * 60 * 60 * 1000);
  startOfWeek.setUTCHours(0, 0, 0, 0);
  return startOfWeek;
}

export const getLastNWeekStarts = (weeksToGet: number) => {
  const result: Date[] = [];
  const date = new Date();
  result.push(getStartOfWeek(date));
  const daysInWeek = 7;

  for (let i = 0; i < weeksToGet; i++) {
    date.setDate(date.getDate() - daysInWeek);
    result.push(getStartOfWeek(date));
  }

  return result;
}