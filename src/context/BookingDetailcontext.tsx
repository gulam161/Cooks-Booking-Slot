import React, { useState } from "react";
import { createContext } from "react";
import { DayDateMonth } from "../components/VisitDate";

interface BookingDetailcontextProps {
  children: React.ReactNode;
}

interface BookingContextType {
  dayDateMonth: DayDateMonth | null;
  time: string;
  numberOfPeople: number;
  handleDayDateMonth: (dayDateMonth: DayDateMonth) => void;
  handleTimeSelect: (time: string) => void;
  setNumberOfPeople: (numberOfPeople: number) => void;
  amount: number;
}

export const BookingContext = createContext<BookingContextType>({
  dayDateMonth: null,
  time: "",
  numberOfPeople: 1,
  handleDayDateMonth: () => {},
  handleTimeSelect: () => {},
  setNumberOfPeople: () => {},
  amount: 549,
});

export const BookingContextProvider = ({
  children,
}: BookingDetailcontextProps) => {
  const [dayDateMonth, setdayDateMonth] = useState<DayDateMonth | null>(null);
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [peopleOfAmount, setPeopleOfAmount] = useState(549);

  const handleDayDateMonth = (value: DayDateMonth) => {
    setdayDateMonth(value);
  };

  const handleTimeSelect = (time: string) => {
    setTime(time);
  };

  const setNumberOfPeople = (people: number) => {
    setPeople((prev) => {
      const newPeople = prev + people;

      if (newPeople < 1) return 1;
      if (newPeople > 2 && people > 0) {
        setPeopleOfAmount((prevAmount) => prevAmount + 100);
      } else if (newPeople >= 2 && people < 0) {
        setPeopleOfAmount((prevAmount) => prevAmount - 100);
      }
      return newPeople;
    });
  };

  return (
    <BookingContext.Provider
      value={{
        dayDateMonth,
        time,
        numberOfPeople: people,
        handleDayDateMonth,
        handleTimeSelect,
        setNumberOfPeople,
        amount: peopleOfAmount,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
