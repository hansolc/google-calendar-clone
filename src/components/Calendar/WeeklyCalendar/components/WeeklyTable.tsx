import { useMemo } from "react";
import { HOURS_OF_DAY } from "../../../../constant/calendar";
import { getDateKey } from "@utils/calendar";
import { useAppSelector } from "@app/hooks";
import { type CalendarEvent } from "@features/events/eventSlice";
import useEvents from "@hooks/useEvents";
import useCalendar from "@hooks/useCalendar";
import Grid from "@components/Grid";
import WeeklyDayColumn from "./WeeklyDayColumn";

const WeeklyTable = () => {
  const events = useAppSelector((state) => state.events.events);
  const { deleteEvent } = useEvents();
  const { headers } = useCalendar();

  const weeklyEventMap = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};

    headers.weeks.forEach(({ date }) => {
      const key = getDateKey(date);
      map[key] = events[key] ?? [];
    });

    return map;
  }, [headers.weeks, events]);

  return (
    <Grid type="weekly" className="w-full">
      {HOURS_OF_DAY.map((hour) => {
        return headers.weeks.map(({ date }) => {
          const key = getDateKey(date);
          const dayEvents = weeklyEventMap[key] ?? [];

          return (
            <WeeklyDayColumn
              key={`${date}_${hour}_weekly`}
              date={date}
              events={dayEvents}
              hour={hour}
              onDelete={deleteEvent}
            />
          );
        });
      })}
    </Grid>
  );
};

export default WeeklyTable;
