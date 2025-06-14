import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import calendarReducer from "../features/calendar/calendarSlice";
import eventReducer from "../features/events/eventSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calendar: calendarReducer,
    events: eventReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
