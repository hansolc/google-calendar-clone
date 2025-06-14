import { HOURS_OF_DAY } from "../../../../constant/calendar";
import WeeklyTable from "./WeeklyTable";

const WeeklyBody = () => {
  return (
    <div className="overflow-y-scroll h-[750px]">
      <div className="flex">
        <SideTimeStamp />
        <WeeklyTable />
      </div>
    </div>
  );
};

const SideTimeStamp = () => {
  return (
    <div className="w-[60px] text-xs flex flex-col max-sm:hidden">
      {HOURS_OF_DAY.map((hour, idx) => (
        <div key={hour} className="h-[64px] relative">
          <span className="absolute top-[-6px]">
            {idx !== 0 && `${hour < 12 ? "오전" : "오후"} ${hour % 12 || 12}시`}
          </span>{" "}
        </div>
      ))}
    </div>
  );
};

export default WeeklyBody;
