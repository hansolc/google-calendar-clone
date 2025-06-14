import { useMemo } from "react";
import { HOURS_OF_DAY } from "../../../../constant/calendar";
import { getDateKey } from "@utils/calendar";
import type { WeekType } from "../../../../types/calendar";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { deleteEvent, type CalendarEvent } from "@features/events/eventSlice";

interface Props {
  weeks: WeekType[];
}

const WeeklyTable = ({ weeks }: Props) => {
  const events = useAppSelector((state) => state.events.events);
  const dispatch = useAppDispatch();

  const weeklyEventMap = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};

    weeks.forEach(({ date }) => {
      const key = getDateKey(date);
      map[key] = events[key] ?? [];
    });

    return map;
  }, [weeks, events]);

  return (
    <div className="grow shrink">
      {HOURS_OF_DAY.map((hour) => (
        <div key={hour} className="flex">
          {weeks.map(({ date }) => {
            const key = getDateKey(date);
            const dayEvents = weeklyEventMap[key] ?? [];

            const matchedEvents = dayEvents
              .filter((event) => {
                const start = new Date(event.start);
                return (
                  start.getHours() === hour &&
                  start.getDate() === date.getDate()
                );
              })
              .map((event, idx, arr) => {
                const start = new Date(event.start);
                const end = new Date(event.end);
                const diffMin = (end.getTime() - start.getTime()) / 60000;

                const heightPercent = (diffMin / 60) * 100;
                const topOffsetPercent = (start.getMinutes() / 60) * 100;

                const count = arr.length;
                const widthPercent = 90 / count;
                const leftPercent = idx * widthPercent;

                return {
                  ...event,
                  style: {
                    height: `${heightPercent}%`,
                    top: `${topOffsetPercent}%`,
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                    zIndex: `${idx}`,
                  },
                };
              });

            return (
              <div className="basis-0 grow" key={key + hour}>
                <div className="border-gray-300 border-l border-t h-[64px] relative flex">
                  {matchedEvents.map((event) => (
                    <div
                      key={`${event.id}_weekly_calendar_event`}
                      className="bg-blue-500 text-white text-xs truncate px-1 absolute border border-white grow cursor-pointer hover:bg-red-400"
                      style={event.style}
                      onClick={() => {
                        if (window.confirm("삭제하시겠습니까?")) {
                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
                          const { style, ...restEvent } = event;
                          dispatch(deleteEvent(restEvent));
                        }
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WeeklyTable;
