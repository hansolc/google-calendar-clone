import clsx from "clsx";
import type { WeekType } from "../../../../types/calendar";
import calendarStyles from "../../Calendar.module.scss";
import styles from "./WeeklyHeader.module.scss";

interface Props {
  weeks: WeekType[];
}

const WeeklyHeader = ({ weeks }: Props) => {
  return (
    <div className="flex pl-[60px] max-sm:pl-0">
      {weeks.map(({ date, isToday }) => (
        <div
          key={date.toISOString()}
          className="grow shrink basis-0 flex flex-col items-center gap-2"
        >
          <div className="text-xs">
            {date.toLocaleDateString("ko-KR", { weekday: "short" })}
          </div>
          <div
            className={clsx("text-2xl", styles["header-day-number"], {
              [calendarStyles.today]: isToday,
            })}
          >
            {date.getDate()}
          </div>
        </div>
      ))}
      <div className="w-[14px]" />
    </div>
  );
};

export default WeeklyHeader;
