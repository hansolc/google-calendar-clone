import BodyWrapper from "@components/Wrapper/BodyWrapper";
import WeeklyCalendar from "@components/Calendar/WeeklyCalendar";
import DayPicker from "@components/Calendar/DayPicker";
import Sidebar from "@components/Sidebar";

const CalendarBody = () => {
  return (
    <BodyWrapper className="h-full">
      <Sidebar>
        <DayPicker />
      </Sidebar>
      <WeeklyCalendar />
    </BodyWrapper>
  );
};

export default CalendarBody;
