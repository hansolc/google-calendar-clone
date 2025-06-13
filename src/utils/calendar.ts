import type { StrDate } from "../types/calendar";

const getStartOffset = (firstMonthDay: number, base: number) =>
  (firstMonthDay + (7 - base)) % 7;

const stringDayToNum = (strDate: StrDate) => {
  switch (strDate) {
    case "Sun":
      return 0;
    case "Mon":
      return 1;
    case "Tue":
      return 2;
    case "Wed":
      return 3;
    case "Thu":
      return 4;
    case "Fri":
      return 5;
    case "Sat":
      return 6;
    default:
      return 1;
  }
};

const isSameDate = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const getMonthDays = (selected: Date, startDayOffset: number) => {
  const year = selected.getFullYear();
  const month = selected.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = getStartOffset(firstOfMonth.getDay(), startDayOffset);
  const startDate = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    return {
      date,
      isToday: date.toDateString() === new Date().toDateString(),
      isCurrentMonth: date.getMonth() === month,
    };
  });
};

const getSelectedWeek = (selected: Date, startDayOffset: number) => {
  const base = new Date(selected);
  base.setHours(0, 0, 0, 0);
  const offset = getStartOffset(base.getDay(), startDayOffset);
  const start = new Date(base);
  start.setDate(base.getDate() - offset);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return {
      date: d,
      isToday: d.toDateString() === new Date().toDateString(),
    };
  });
};

const getDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;

export {
  stringDayToNum,
  getMonthDays,
  getSelectedWeek,
  getDateKey,
  isSameDate,
};
