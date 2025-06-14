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

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const isValidTimeRange = (start: string, end: string): boolean => {
  return timeToMinutes(start) < timeToMinutes(end);
};

const ISOstringToTimeFormat = (str: string) => {
  return str.split("T")[1].substring(0, 5);
};

export {
  toLocalISOString,
  makeRepeatEventArray,
  isValidTimeRange,
  ISOstringToTimeFormat,
};
