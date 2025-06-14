import type { CalendarEvent } from "@features/events/eventSlice";
import { useMemo } from "react";

interface UseFilterEventProps {
  events: CalendarEvent[];
  date: Date;
  hour: number;
}

const useFilterEvent = ({ events, date, hour }: UseFilterEventProps) => {
  const matchedEvents = useMemo(() => {
    const filtered = events
      .filter((event) => {
        const start = new Date(event.start);
        return start.getHours() === hour && start.getDate() === date.getDate();
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
            zIndex: `${idx + 1}`,
          },
        };
      });

    return filtered;
  }, [events, date, hour]);

  return {
    matchedEvents,
  };
};

export default useFilterEvent;
