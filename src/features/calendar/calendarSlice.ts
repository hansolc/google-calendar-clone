import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CalendarState {
  selectedDate: Date;
}

const initialState: CalendarState = {
  selectedDate: new Date(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setDate } = calendarSlice.actions;

export default calendarSlice.reducer;
