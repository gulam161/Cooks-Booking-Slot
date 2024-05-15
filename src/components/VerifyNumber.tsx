import React, { type Dispatch, type SetStateAction } from "react";

type VerifyNumberProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const VerifyNumber: React.FC<VerifyNumberProps> = ({ setShow, show }) => {
  return (
    <>
      {show && (
        <div
          onClick={() => setShow(!show)}
          className="fixed w-full z-50 top-0 left-0 bg-black/50 h-screen"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-down p-7 w-full h-[calc(100vh-20rem)] bg-white rounded-t-md absolute bottom-0 flex flex-col gap-y-10"
          >
            <div className="sticky top-0">
              <h1 className="text_20">Before We Proceed</h1>
              <p className="mt-1 text-sm text-gray-500 font-normal">
                Let's verify your number.
              </p>
            </div>

            <div>
              <label htmlFor="number" className="text-sm">
                Enter 10 digit WhatsApp mobile no
              </label>

              <input
                type="number"
                placeholder="Eg. +91xxxxxxxx"
                className="px-3 py-2 rounded-md mt-2 outline-none my-0 border-4 border-gray-100 w-full bg-gray-100 placeholder:tracking-widest placeholder:text-sm"
              />
            </div>

            <button className="mt-10 px-6 py-2 text-lg bg-black/90 text-white font-semibold rounded-lg shadow-sm">
              Get OTP
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default VerifyNumber;
