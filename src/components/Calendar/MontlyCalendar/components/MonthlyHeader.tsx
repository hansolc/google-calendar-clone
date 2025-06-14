import useCalendar from "@hooks/useCalendar";

const MonthlyHeader = () => {
  const { headers } = useCalendar();
  return (
    <div className="flex text-center text-xs">
      {headers.dayLabels.map((day) => {
        return (
          <div className="grow" key={`${day}_monthly_key`}>
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyHeader;
