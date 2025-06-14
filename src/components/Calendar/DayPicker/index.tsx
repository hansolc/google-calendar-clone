import clsx from "clsx";
import useCalendar from "../../../hooks/useCalendar";
import styles from "./index.module.scss";
import calendarStyles from "../Calendar.module.scss";
import { NUMBER_OF_WEEK_OF_DAYS } from "../../../constant/calendar";
import { isSameDate } from "@utils/calendar";
import { toLocalISOString } from "@utils/events";

const DayPicker = () => {
  const { headers, body, setDate, selectedDate } = useCalendar();
  return (
    <div>
      <div className="text-sm pl-2 pb-2 font-bold">{`${headers.year}년 ${headers.month}월`}</div>
      <table className={styles.daypicker}>
        <thead>
          <tr>
            {headers.dayLabels.map((day) => {
              return <th key={`${day}_day_picker_key`}>{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array(NUMBER_OF_WEEK_OF_DAYS)
            .fill(NUMBER_OF_WEEK_OF_DAYS)
            .map((numOfDays, idx) => {
              return (
                <tr key={`${numOfDays}_${idx}_daypicker_tr`}>
                  {body.days
                    .slice(idx * numOfDays, (idx + 1) * numOfDays)
                    .map((value) => {
                      return (
                        <td key={`${value.date.toString()}_daypicker_td`}>
                          <button
                            onClick={() =>
                              setDate(toLocalISOString(value.date))
                            }
                            className={clsx(
                              { [calendarStyles.today]: value.isToday },
                              {
                                [calendarStyles.selected]: isSameDate(
                                  selectedDate,
                                  value.date
                                ),
                              }
                            )}
                          >
                            {value.date.getDate()}
                          </button>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DayPicker;
