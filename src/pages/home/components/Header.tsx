import Header from "@components/Header";
import Logo from "/img/logo.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const HomeHeader = () => {
  return (
    <Header className="h-16">
      <Header.Left className="flex items-center gap-2">
        <img src={Logo} width="40px" height="40px" />
        <span className="text-2xl">Calendar</span>
      </Header.Left>
      <Header.Right className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex ">
            <button>오늘</button>
            <MdChevronLeft size="32" />
            <MdChevronRight size="32" />
          </div>
          <div>2025년 6월</div>
        </div>
        <div>Icons</div>
      </Header.Right>
    </Header>
  );
};

export default HomeHeader;
