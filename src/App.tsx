import React from "react";
import BookingPage from "./components/BookingPage";
import BookingChefs from "./assets/3718228.jpg";

const App: React.FC = () => {
  return (
    <>
      <div className="flex justify-evenly bg-[#bedfee] h-screen">
        <div className="relative m-auto md:border-gray-800 dark:border-gray-800 md:bg-gray-800 border-x-0 md:border-x-[10px] border-y-0 md:border-y-[15px] md:rounded-[1.5rem] rounded-none h-full max-w-[1041px] w-full md:h-[620px] md:max-w-[440px] ">
          <div className="h-[32px] w-[2px] md:w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[2px] md:w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[2px] md:w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[2px] md:w-[2px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-none md:rounded-[1rem] overflow-hidden h-[100%] md:h-[590px] bg-white dark:bg-gray-800">
            <BookingPage />
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            src={BookingChefs}
            alt="Two Foodie Chefs"
            className="w-full h-full p-7"
          />
        </div>
      </div>
    </>
  );
};
export default App;
