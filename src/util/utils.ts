export function getStringDate(date: Date) {
  return date.toISOString().substring(0, 10);
}

export function getRangeDays(numberDay: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // mid night
  const pastDay = new Date().setDate(today.getDate() + numberDay);

  const startDate = getStringDate(today);
  const endDate = getStringDate(new Date(pastDay));

  return { startDate, endDate };
}
