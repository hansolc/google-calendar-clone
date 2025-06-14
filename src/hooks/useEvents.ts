import { useAppDispatch } from "@app/hooks";
import { createEvent } from "@features/events/eventSlice";

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

    const start = `${date}T${startTime}:00`;
    const end = `${date}T${endTime}:00`;

    const data = {
      id: Math.floor(Math.random() * 10000 + 1),
      title,
      start,
      end,
    };

    dispatch(createEvent(data));
    callback?.();
  };

  return {
    handleSubmit,
  };
};

export default useEvents;
