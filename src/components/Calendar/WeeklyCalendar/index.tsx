import WeeklyBody from "./components/WeeklyBody";
import Card from "@components/Card";
import WeeklyHeader from "./components/WeeklyHeader";

const WeeklyCalendar = () => {
  return (
    <Card className="grow shrink">
      <WeeklyHeader />
      <WeeklyBody />
    </Card>
  );
};

export default WeeklyCalendar;
