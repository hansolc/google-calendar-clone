import { HOURS_OF_DAY } from "../../../../constant/calendar";
import WeeklyTable from "./WeeklyTable";
import type { WeekType } from "../../../../types/calendar";
interface Props {
  weeks: WeekType[];
}
const WeeklyBody = ({ weeks }: Props) => {
  return (
    <div className="overflow-y-scroll h-[750px]">
      <div className="flex">
        <SideTimeStamp />
        <WeeklyTable weeks={weeks} />
      </div>
    </div>
  );
};

const SideTimeStamp = () => {
  return (
    <div className="w-[60px] text-xs flex flex-col">
      {HOURS_OF_DAY.map((hour) => (
        <div key={hour} className="h-[64px] relative">
          <span className="absolute top-[57px]">{`오전 ${hour}시`}</span>
        </div>
      ))}
    </div>
  );
};

export default WeeklyBody;
