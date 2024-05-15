import React, {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";
import { BookingContext } from "../context/BookingDetailcontext";

type ModalTimeProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const ModalTime: React.FC<ModalTimeProps> = ({ setShow, show }) => {
  const [timeSlots, setTimeSlots] = useState<{ formattedTime: string }[]>([]);
  const { handleTimeSelect } = useContext(BookingContext);

  const generateTimeSlots = () => {
    const startTime = new Date();
    startTime.setHours(6, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(23, 30, 0, 0);

    const slots: { formattedTime: string }[] = [];
    while (startTime <= endTime) {
      const formattedTime = startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push({ formattedTime });
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    setTimeSlots(slots);
  };

  useEffect(() => {
    generateTimeSlots();
  }, []);

  return (
    <>
      {show && (
        <div
          onClick={() => setShow(!show)}
          className="fixed w-full z-50 top-0 left-0 bg-black/50 h-screen "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-down p-7 w-full h-[calc(100vh-10rem)] bg-white rounded-t-md absolute bottom-0 flex flex-col justify-between"
          >
            <div className="sticky top-0">
              <h1 className="text_20 text-lg">Select Time Of Visit</h1>
              <p className="mt-1 text-sm">Please select an available slot</p>
            </div>
            <div className="mt-5 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="grid grid-cols-6 max-sm:grid-cols-2 max-md:grid-cols-3 gap-10 ">
                {timeSlots.length &&
                  timeSlots.map(({ formattedTime }, index) => (
                    <div
                      key={index}
                      className="text-center px-5 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTimeSelect(formattedTime)}
                    >
                      {formattedTime}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTime;
