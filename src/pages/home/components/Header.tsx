import Header from "@components/Header";
import Logo from "/img/logo.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  setDate,
  setNextWeek,
  setPrevWeek,
} from "@features/calendar/calendarSlice";

const HomeHeader = () => {
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
      </Header.Right>
    </Header>
  );
};

export default HomeHeader;
