import Grid from "@components/Grid";
import useCalendar from "@hooks/useCalendar";
import { ISOstringToTimeFormat, toLocalISOString } from "@utils/events";
import clsx from "clsx";
import calendarStyles from "../../Calendar.module.scss";
import { useAppSelector } from "@app/hooks";
import { getDateKey } from "@utils/calendar";

const MonthlyBody = () => {
  const { body } = useCalendar();
  const events = useAppSelector((state) => state.events.events);

  return (
    <Grid type="monthly" className="grow">
      {body.days.map((d) => {
        const key = getDateKey(d.date);
        const selectedEvent = events[key] ?? [];
        return (
          <div
            key={toLocalISOString(d.date)}
            className={clsx(
              "border-gray-200 border-r border-b text-center text-ellipsis truncate"
            )}
          >
            <span
              className={clsx(
                {
                  [calendarStyles.today]: d.isToday,
                },
                "rounded-3xl p-1 text-sm font-bold"
              )}
            >
              {d.date.getDate()}
            </span>
            <ul>
              {selectedEvent.slice(0, 4).map((se) => {
                return (
                  <li
                    key={`${se.id}_monthly_event`}
                    className="flex text-xs px-2 gap-2"
                  >
                    - {se.title}
                    <div>{`${ISOstringToTimeFormat(
                      se.start
                    )} ~ ${ISOstringToTimeFormat(se.end)}`}</div>
                  </li>
                );
              })}
            </ul>
            {selectedEvent.length > 4 && (
              <div className="text-xs text-left pl-2">
                ... {`외 ${selectedEvent.length - 4}개`}
              </div>
            )}
          </div>
        );
      })}
    </Grid>
  );
};

export default MonthlyBody;
