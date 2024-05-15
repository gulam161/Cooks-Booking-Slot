import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ModalTime from "./ModalTime";
import { BookingContext } from "../context/BookingDetailcontext";

const VistTime: React.FC = () => {
  const [show, setShow] = useState(false);
  const { time } = useContext(BookingContext);

  useEffect(() => {
    if (time) setShow(false);
  }, [time]);

  return (
    <div className="relative p-6">
      <div className="text-sm rounded-lg px-4 py-6 flex justify-between font-semibold my-4 shadow-box">
        <h2>Visit Time</h2>
        <div
          onClick={() => setShow(!show)}
          className="flex-center cursor-pointer"
        >
          {time ? time : "Select Time"}
          <span className="ml-2">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <ModalTime show={show} setShow={setShow} />
    </div>
  );
};
export default VistTime;
