import useCalendar from "@hooks/useCalendar";
import Header from "./components/Header";
import WeeklyBody from "./components/WeeklyBody";
import Card from "@components/Card";

const WeeklyCalendar = () => {
  const { headers } = useCalendar();

  return (
    <Card className="grow shrink">
      <Header weeks={headers.weeks} />
      <WeeklyBody weeks={headers.weeks} />
    </Card>
  );
};

export default WeeklyCalendar;
