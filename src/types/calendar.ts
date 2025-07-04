import type useCalendar from "@hooks/useCalendar";

type StrDate = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
type UseCalendarReturnType = ReturnType<typeof useCalendar>;
type WeekType = UseCalendarReturnType["headers"]["weeks"][number];
type CalendarType = "weekly" | "monthly";

export type { StrDate, WeekType, CalendarType };
