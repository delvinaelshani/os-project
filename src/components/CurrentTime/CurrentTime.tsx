import { useEffect, useState } from "react";

const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} - ${hours}:${minutes}:${seconds}`;
};

export const CurrentTime = () => {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return <span className="text-xs font-bold cursor-pointer">{time}</span>;
};
