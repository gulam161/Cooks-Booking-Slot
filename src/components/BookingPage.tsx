import React from "react";
import VisitDate from "./VisitDate";
import VistTime from "./VistTime";
import Select from "./Select";
import AddToDetails from "./AddToDetails";
import Header from "./Header";

const BookingPage: React.FC = () => {
  return (
    <div className="max-h-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
      <Header />
      <VisitDate />
      <VistTime />
      <Select />
      <AddToDetails />
    </div>
  );
};

export default BookingPage;
