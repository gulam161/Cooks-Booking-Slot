import React, { useState, useEffect, useContext } from "react";
import { BookingContext } from "../context/BookingDetailcontext";

export interface DayDateMonth {
  day: string;
  date: number;
  month: string;
}

const VisitDate: React.FC = () => {
  const [dateElements, setDateElements] = useState<DayDateMonth[]>([]);
  const { handleDayDateMonth, dayDateMonth } = useContext(BookingContext);

  useEffect(() => {
    const generateDateElements = () => {
      const today = new Date();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      const formattedDateElements: DayDateMonth[] = [];

      for (let i = 0; i < 5; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + i);

        const day = daysOfWeek[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.toLocaleString("default", { month: "short" });

        formattedDateElements.push({ day, date, month });
      }

      return formattedDateElements;
    };

    setDateElements(generateDateElements());
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text_20">Select Visit Date</h1>
        <div className="flex-evenly text-sm py-7">
          {dateElements.length &&
            dateElements.map(({ date, day, month }, index) => (
              <div
                key={index}
                className={
                  day === dayDateMonth?.day ? "visit_date active" : "visit_date"
                }
                onClick={() => handleDayDateMonth(dateElements[index])}
              >
                <div>{day}</div>
                <div className="font-bold text-base">{date}</div>
                <div>{month}</div>
              </div>
            ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default VisitDate;
