import Header from "@components/Header";
import Logo from "/img/logo.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAppDispatch } from "@app/hooks";
import {
  setDate,
  setNextWeek,
  setPrevWeek,
} from "@features/calendar/calendarSlice";

const HomeHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <Header className="h-16">
      <Header.Left className="flex items-center gap-2">
        <img src={Logo} width="40px" height="40px" />
        <span className="text-2xl">Calendar</span>
      </Header.Left>
      <Header.Right className="flex items-center">
        <div className="flex items-center gap-5">
          <button
            onClick={() => dispatch(setDate(new Date().toISOString()))}
            className="border px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-200"
          >
            오늘
          </button>
          <div className="flex">
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
          <div className="text-2xl">2025년 6월</div>
        </div>
      </Header.Right>
    </Header>
  );
};

export default HomeHeader;
