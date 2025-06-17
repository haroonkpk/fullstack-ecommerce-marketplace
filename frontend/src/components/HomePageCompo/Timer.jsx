import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // expired
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <span className="text-red-500 font-bold">Offer expired</span>;
  }

  return (
    <div className="flex gap-1 items-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center justify-center">
          <div
            className={` bg-[#EFF2F4] md:bg-[#606060] md:text-white text-gray-500 flex flex-col px-2 py-1 rounded ${
              label === "days" ? "hidden sm:flex" : ""
            } `}
          >
            {String(value).padStart(2, "0")}
            <span className="text-xs capitalize">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
