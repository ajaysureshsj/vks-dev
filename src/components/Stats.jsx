import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-3">
      <div className="h-60 rounded-md bg-gray-50">
        <div className="flex flex-col justify-center align-middle h-full w-full p-5">
          <h1 className="text-3xl lg:text-4xl text-center font-bold text-blue-500">3.8 hrs</h1>
          <p className="text-xl lg:text-2xl text-center text-gray-700">Running Hours</p>
        </div>
      </div>
      <div className="h-60 rounded-md bg-gray-50">
        <div className="h-60 rounded-md">
          <div className="flex flex-col justify-center align-middle h-full w-full p-5">
            <h1 className="text-3xl lg:text-4xl text-center font-bold text-red-500">₹3000/-</h1>
            <p className="text-xl lg:text-2xl text-center text-gray-700">Expense</p>
          </div>
        </div>
      </div>
      <div className="h-60 rounded-md bg-gray-50">
        <div className="h-60 rounded-md">
          <div className="flex flex-col justify-center align-middle h-full w-full p-5">
            <h1 className="text-3xl lg:text-4xl text-center font-bold text-green-500">₹9000/-</h1>
            <p className="text-xl lg:text-2xl text-center text-gray-700">Income</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
