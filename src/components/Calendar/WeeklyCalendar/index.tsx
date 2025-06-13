import useCalendar from "@hooks/useCalendar";
import WeeklyBody from "./components/WeeklyBody";
import Card from "@components/Card";
import WeeklyHeader from "./components/WeeklyHeader";

const WeeklyCalendar = () => {
  const { headers } = useCalendar();

  return (
    <Card className="grow shrink">
      <WeeklyHeader weeks={headers.weeks} />
      <WeeklyBody weeks={headers.weeks} />
    </Card>
  );
};

export default WeeklyCalendar;
