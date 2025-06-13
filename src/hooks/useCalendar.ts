import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setDate } from "../features/calendar/calendarSlice";
import type { StrDate } from "../types/calendar";
import {
  getMonthDays,
  getSelectedWeek,
  stringDayToNum,
} from "../utils/calendar";

export interface UseCalendarProps {
  startDayStr?: StrDate;
}

const useCalendar = ({ startDayStr = "Mon" }: UseCalendarProps = {}) => {
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate);
  const dispatch = useAppDispatch();

  const startDayOffset = stringDayToNum(startDayStr);

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const days = getMonthDays(selectedDate, startDayOffset);
  const weeks = getSelectedWeek(selectedDate, startDayOffset);

  return {
    headers: {
      year,
      month: month + 1,
      dayLabels: ["월", "화", "수", "목", "금", "토", "일"],
      weeks,
    },
    body: {
      days,
    },
    setDate: (value: Date) => dispatch(setDate(value)),
  };
};

export default useCalendar;
