import type { CalendarEvent } from "@features/events/eventSlice";
import { ISOstringToTimeFormat } from "@utils/events";
import useFilterEvent from "../hooks/useFilterEvent";

interface WeeklyDayColumnProps {
  date: Date;
  hour: number;
  events: CalendarEvent[];
  onDelete: (event: CalendarEvent) => void;
}

const WeeklyDayColumn = ({
  date,
  hour,
  events,
  onDelete,
}: WeeklyDayColumnProps) => {
  const { matchedEvents } = useFilterEvent({
    date: date,
    events: events,
    hour: hour,
  });

  return (
    <div className="border-gray-300 border-l border-t relative">
      {matchedEvents.map((event) => (
        <div
          key={`${event.id}_weekly_calendar_event`}
          className="bg-blue-500 text-white text-xs truncate px-1 absolute border border-white cursor-pointer hover:bg-red-400 rounded"
          style={event.style}
          onClick={() => {
            if (window.confirm("삭제하시겠습니까?")) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { style, ...restEvent } = event;
              onDelete(restEvent);
            }
          }}
        >
          <div>
            {event.title}
            <div>{`${ISOstringToTimeFormat(
              event.start
            )} ~ ${ISOstringToTimeFormat(event.end)}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyDayColumn;
