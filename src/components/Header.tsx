import React from "react";
import { IoIosArrowBack } from "react-icons/io";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="sticky top-0 flex-center gap-3 text_20 px-4 py-5 shadow-lg bg-white">
      <IoIosArrowBack />
      <h1> Booking Details</h1>
    </div>
  );
};
export default Header;
