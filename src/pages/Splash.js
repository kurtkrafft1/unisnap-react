import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) return navigate("/");
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-evenly">
      <div className="flex justify-center text-white number-large">{count}</div>
      <div lassName="flex justify-center text-white text-2xl">
        <div className="w-24 h-24 bg-red-600 rounded-full animate-pulse-1"></div>
      </div>
    </div>
  );
};

export default Splash;
