import BodyWrapper from "@components/Wrapper/BodyWrapper";
import WeeklyCalendar from "@components/Calendar/WeeklyCalendar";
import DayPicker from "@components/Calendar/DayPicker";
import Sidebar from "@components/Sidebar";
import CreateEventButton from "./CreateEventButton";
import MonthlyCalendar from "@components/Calendar/MontlyCalendar";
import type { CalendarType } from "../../../types/calendar";

interface Props {
  type: CalendarType;
}

const CalendarBody = ({ type }: Props) => {
  return (
    <BodyWrapper className="h-full">
      <Sidebar className="max-sm:hidden">
        <CreateEventButton />
        <DayPicker />
      </Sidebar>
      {type === "weekly" && <WeeklyCalendar />}
      {type === "monthly" && <MonthlyCalendar />}
    </BodyWrapper>
  );
};

export default CalendarBody;
