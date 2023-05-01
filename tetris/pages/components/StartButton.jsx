import React from "react";

const StartButton = ({ callback }) => {
  return (
    <div
      className="text-white p-[20px] mt-16 min-h-[30px] w-full border-4 border-gray-400 rounded-3xl bg-gray-700 font-mono text-4xl hover:cursor-pointer"
      onClick={callback}
    >
      StartButton
    </div>
  );
};

export default StartButton;
