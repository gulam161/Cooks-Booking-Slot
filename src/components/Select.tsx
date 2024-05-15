import React, { useContext } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { BookingContext } from "../context/BookingDetailcontext";

type SelectProps = {};

const Select: React.FC<SelectProps> = () => {
  const { numberOfPeople, setNumberOfPeople } = useContext(BookingContext);

  return (
    <div className="p-6">
      <h1 className="text_20">Number of People</h1>
      <div className="rounded-lg px-4 py-2 text-sm  my-4 shadow-box">
        <div className="flex justify-between items-center py-3 font-medium">
          <div className="flex gap-4">
            <IoIosPeople size={20} />
            <p>Select total no of people</p>
          </div>
          <div className="flex border rounded-md">
            <p
              className="py-2 px-4 cursor-pointer"
              onClick={() => setNumberOfPeople(-1)}
            >
              -
            </p>
            <p className="py-2 px-4  bg-green-600 text-white">
              {numberOfPeople}
            </p>
            <p
              className="py-2 px-4 cursor-pointer"
              onClick={() => setNumberOfPeople(+1)}
            >
              +
            </p>
          </div>
        </div>
        <div className="flex gap-4 border-y py-3">
          <FaRupeeSign color="orange" />

          <p>
            Extra <span className="font-medium">₹100 per person</span> will be
            added after 2 members
          </p>
        </div>
        <div className="flex gap-4  py-3">
          <FcClock size={20} color="orange" />
          <p>
            Total cooking time- <span className="font-medium"> 1.5 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Select;
