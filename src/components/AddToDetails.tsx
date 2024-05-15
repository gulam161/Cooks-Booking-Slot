import React, { useContext, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { BookingContext } from "../context/BookingDetailcontext";
import VerifyNumber from "./VerifyNumber";

const AddToDetails: React.FC = () => {
  const [show, setShow] = useState(false);
  const { dayDateMonth, time, amount } = useContext(BookingContext);

  const isDisabled = !(dayDateMonth && time);

  return (
    <div className="relative flex justify-between items-center p-7 shadow-3xl">
      <div>
        <h1 className="text_20 flex-center">
          <FaRupeeSign size={16} />
          <p>{amount ? amount : "Number of People"}</p>
        </h1>
        <p className="text-sm">
          Payable Amount <span className="text-orange-400">(DETAILS)</span>
        </p>
      </div>
      <button
        disabled={isDisabled}
        className={`relative px-6 py-2 text-lg text-white font-semibold ${
          !isDisabled
            ? "bg-black cursor-pointer"
            : "bg-black/20 cursor-not-allowed"
        } rounded-lg shadow-sm`}
        onClick={() => setShow(!show)}
      >
        Continue
      </button>
      <VerifyNumber show={show} setShow={setShow} />
    </div>
  );
};
export default AddToDetails;
