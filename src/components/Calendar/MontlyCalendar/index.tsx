import Card from "@components/Card";
import MonthlyHeader from "./components/MonthlyHeader";
import MonthlyBody from "./components/MonthlyBody";

const MonthlyCalendar = () => {
  return (
    <Card className="grow shrink flex flex-col">
      <MonthlyHeader />
      <MonthlyBody />
    </Card>
  );
};

export default MonthlyCalendar;
