import { useAppDispatch } from "@app/hooks";
import {
  createEvent,
  createRepeatEvent,
  deleteEvent,
  type CalendarEvent,
} from "@features/events/eventSlice";
import { makeRepeatEventArray } from "@utils/events";

const useEvents = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent, callback?: () => void) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const date = formData.get("event_date");
    const startTime = formData.get("event_start");
    const endTime = formData.get("event_end");
    const everyweek = formData.get("everyweek") as number | null;

    const start = `${date}T${startTime}:00`;
    const end = `${date}T${endTime}:00`;

    const data = {
      id: Math.floor(Math.random() * 10000 + 1),
      title,
      start,
      end,
    };

    if (everyweek) {
      const eventsArray = makeRepeatEventArray(
        new Date(start),
        new Date(end),
        data,
        everyweek
      );
      dispatch(createRepeatEvent(eventsArray));
    } else {
      dispatch(createEvent(data));
    }

    callback?.();
  };

  return {
    handleSubmit,
    deleteEvent: (event: CalendarEvent) => dispatch(deleteEvent(event)),
  };
};

export default useEvents;
