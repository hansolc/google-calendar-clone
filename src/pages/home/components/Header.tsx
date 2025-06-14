import Header from "@components/Header";
import Logo from "/img/logo.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  setDate,
  setNextWeek,
  setPrevWeek,
} from "@features/calendar/calendarSlice";
import type { CalendarType } from "../../../types/calendar";

interface Props {
  type: CalendarType;
  setType: (type: CalendarType) => void;
}

const HomeHeader = ({ type, setType }: Props) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((selector) => selector.calendar.selectedDate);
  const selectedDate = new Date(selected);

  return (
    <Header className="h-16 ">
      <Header.Left className="flex items-center gap-2">
        <img src={Logo} width="40px" height="40px" />
        <span className="text-2xl">Calendar</span>
      </Header.Left>
      <Header.Right className="flex items-center gap-5 max-sm:justify-end">
        <button
          onClick={() => dispatch(setDate(new Date().toISOString()))}
          className="border px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-200 max-sm:hidden"
        >
          오늘
        </button>
        <div className="flex max-sm:hidden">
          <MdChevronLeft
            size="32"
            className="cursor-pointer hover:bg-gray-200 rounded-2xl"
            onClick={() => dispatch(setPrevWeek())}
          />
          <MdChevronRight
            size="32"
            className="cursor-pointer hover:bg-gray-200 rounded-2xl"
            onClick={() => dispatch(setNextWeek())}
          />
        </div>
        <div className="text-2xl">{`${selectedDate.getFullYear()}년 ${
          selectedDate.getMonth() + 1
        }월`}</div>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as CalendarType)}
          className="outline-0 border-black border px-3"
        >
          <option value="weekly">주간</option>
          <option value="monthly">월간</option>
        </select>
      </Header.Right>
    </Header>
  );
};

export default HomeHeader;
