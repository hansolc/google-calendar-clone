import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CalendarState {
  selectedDate: string;
}

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setDate } = calendarSlice.actions;

export default calendarSlice.reducer;
