import clsx from "clsx";
import useCalendar from "../../../hooks/useCalendar";
import styles from "./index.module.scss";
import { NUMBER_OF_WEEK_OF_DAYS } from "../../../constant/calendar";

const DayPicker = () => {
  const { headers, body, setDate } = useCalendar();
  return (
    <div>
      <div className="text-sm">{`${headers.year}년 ${headers.month}월`}</div>
      <table className={styles.daypicker}>
        <thead>
          <tr>
            {headers.dayLabels.map((day) => {
              return <th key={`${day}_day_picker_key`}>{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from(
            { length: NUMBER_OF_WEEK_OF_DAYS },
            () => NUMBER_OF_WEEK_OF_DAYS
          ).map((numOfDays, idx) => {
            return (
              <tr key={`temp_${idx}`}>
                {body.days
                  .slice(idx * numOfDays, (idx + 1) * numOfDays)
                  .map((value) => {
                    return (
                      <td
                        key={`temp_key_${value.date.toString()}`}
                        onClick={() => setDate(value.date)}
                        className={clsx({ "bg-red-500": value.isToday })}
                      >
                        {value.date.getDate()}
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
