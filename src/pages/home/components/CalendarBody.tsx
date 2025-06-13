import BodyWrapper from "@components/Wrapper/BodyWrapper";
import Card from "@components/Card";
import WeeklyCalendar from "@components/Calendar/WeeklyCalendar";
import DayPicker from "@components/Calendar/DayPicker";
import Sidebar from "@components/Sidebar";

const CalendarBody = () => {
  return (
    <BodyWrapper>
      <Sidebar>
        <DayPicker />
      </Sidebar>
      <Card className="grow shrink">
        <WeeklyCalendar />
      </Card>
    </BodyWrapper>
  );
};

export default CalendarBody;
