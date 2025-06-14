import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toLocalISOString } from "@utils/events";

export interface CalendarState {
  selectedDate: string;
}

const initialState: CalendarState = {
  selectedDate: toLocalISOString(new Date()),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setPrevWeek: (state) => {
      const d = new Date(state.selectedDate);
      d.setDate(d.getDate() - 7);
      state.selectedDate = d.toISOString();
    },
    setNextWeek: (state) => {
      const d = new Date(state.selectedDate);
      d.setDate(d.getDate() + 7);
      state.selectedDate = d.toISOString();
    },
  },
});

export const { setDate, setPrevWeek, setNextWeek } = calendarSlice.actions;

export default calendarSlice.reducer;
