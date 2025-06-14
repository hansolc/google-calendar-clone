import type { CalendarEvent } from "@features/events/eventSlice";

const toLocalISOString = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const localTime = new Date(date.getTime() - offset);
  return localTime.toISOString().slice(0, 19);
};

const makeRepeatEventArray = (
  baseStartDate: Date,
  baseEndDate: Date,
  data: CalendarEvent,
  repeat: number
) => {
  const arr = [data];

  for (let i = 1; i <= repeat; i++) {
    const nextStart = new Date(baseStartDate);
    nextStart.setDate(baseStartDate.getDate() + 7 * i);

    const nextEnd = new Date(baseEndDate);
    nextEnd.setDate(baseEndDate.getDate() + 7 * i);

    arr.push({
      id: data.id + i,
      title: data.title,
      start: toLocalISOString(nextStart),
      end: toLocalISOString(nextEnd),
    });
  }
  return arr;
};

export { toLocalISOString, makeRepeatEventArray };
