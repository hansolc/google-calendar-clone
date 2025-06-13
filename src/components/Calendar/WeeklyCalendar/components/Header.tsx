import clsx from "clsx";
import type { WeekType } from "../../../../types/calendar";

interface Props {
  weeks: WeekType[];
}

const Header = ({ weeks }: Props) => {
  return (
    <div className="flex text-center pl-[60px]">
      {weeks.map(({ date, isToday }) => (
        <div key={date.toISOString()} className="grow shrink basis-0">
          <div className="text-xs">
            {date.toLocaleDateString("ko-KR", { weekday: "short" })}
          </div>
          <div className={clsx("text-2xl", { "bg-red-500": isToday })}>
            {date.getDate()}
          </div>
        </div>
      ))}
      <div className="w-[14px]" />
    </div>
  );
};

export default Header;
