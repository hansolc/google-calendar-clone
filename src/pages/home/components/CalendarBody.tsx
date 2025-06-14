import BodyWrapper from "@components/Wrapper/BodyWrapper";
import WeeklyCalendar from "@components/Calendar/WeeklyCalendar";
import DayPicker from "@components/Calendar/DayPicker";
import Sidebar from "@components/Sidebar";
import CreateEventButton from "./CreateEventButton";
import { useState } from "react";
import MonthlyCalendar from "@components/Calendar/MontlyCalendar";

const CalendarBody = () => {
  const [type, setType] = useState<"monthly" | "weekly">("monthly");
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
