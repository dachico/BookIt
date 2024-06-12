import { GrPrevious, GrNext } from "react-icons/gr";
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import isTodayPlugin from "dayjs/plugin/isToday";
import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";
import {
  Header,
  Icon,
  ColStart,
  ColCenter,
  ColEnd,
  TodayBtn,
  DayBtn,
  WeekBtn,
  MonthBtn,
} from "./CalendarHeader.styles";

dayjs.extend(weekdayPlugin);
dayjs.extend(isTodayPlugin);

const CalendarHeader = () => {
  const { currentDate, setCurrentDate, currentView, setCurrentView } =
    useContext(BookingContext);
  const now = dayjs();

  const navigateNextDate = () => {
    if (currentView === "month") {
      setCurrentDate(currentDate.add(1, "month"));
    } else if (currentView === "week") {
      setCurrentDate(currentDate.add(1, "week"));
    } else if (currentView === "day") {
      setCurrentDate(currentDate.add(1, "day"));
    }
  };

  const navigatePreviousDate = () => {
    if (currentView === "month") {
      setCurrentDate(currentDate.subtract(1, "month"));
    } else if (currentView === "week") {
      setCurrentDate(currentDate.subtract(1, "week"));
    } else if (currentView === "day") {
      setCurrentDate(currentDate.subtract(1, "day"));
    }
  };

  const startOfWeek = currentDate.startOf("week").format("MMM DD");
  const endOfWeek = currentDate.endOf("week").format("MMM DD");

  const dateFormat =
    currentView === "month"
      ? "MMM YYYY"
      : currentView === "week"
      ? `${startOfWeek} - ${endOfWeek}`
      : "dddd, MMM DD, YYYY";

  return (
    <Header>
      <ColStart>
        <Icon onClick={navigatePreviousDate}>
          <GrPrevious />
        </Icon>
        <TodayBtn onClick={() => setCurrentDate(now)}>Today</TodayBtn>
        <Icon onClick={navigateNextDate}>
          <GrNext />
        </Icon>
      </ColStart>
      <ColCenter>
        <div>
          {currentView === "week"
            ? `${startOfWeek} - ${endOfWeek}, ${currentDate.year()}`
            : currentDate.format(dateFormat)}
        </div>
      </ColCenter>
      <ColEnd>
        <MonthBtn onClick={() => setCurrentView("month")}>Month</MonthBtn>
        <WeekBtn onClick={() => setCurrentView("week")}>Week</WeekBtn>
        <DayBtn onClick={() => setCurrentView("day")}>Day</DayBtn>
      </ColEnd>
    </Header>
  );
};

export default CalendarHeader;
