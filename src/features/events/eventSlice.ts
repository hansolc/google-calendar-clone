import { createSlice } from "@reduxjs/toolkit";

export interface CalendarEvent {
  id: number;
  start: string;
  end: string;
  title: string;
}

export interface EventState {
  events: Record<string, CalendarEvent[]>;
}

const initialState: EventState = {
  events: {
    "2025-06-13": [
      {
        id: 1,
        start: "2025-06-13T09:00:00",
        end: "2025-06-13T10:00:00",
        title: "회의",
      },
      {
        id: 3,
        start: "2025-06-13T09:00:00",
        end: "2025-06-13T10:00:00",
        title: "회의2",
      },
      {
        id: 4,
        start: "2025-06-13T09:00:00",
        end: "2025-06-13T10:00:00",
        title: "회의4",
      },
      {
        id: 5,
        start: "2025-06-13T09:30:00",
        end: "2025-06-13T10:30:00",
        title: "회의4",
      },
      {
        id: 2,
        start: "2025-06-13T13:00:00",
        end: "2025-06-13T14:00:00",
        title: "점심 약속",
      },
    ],
  },
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export default eventSlice.reducer;
