import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full font-sans">
        <div className="p-5 bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-md">
          <p className="text-3xl font-semibold text-blue-500 text-center">
            3hrs, 16mins
          </p>
          <h1 className="text-md font-medium text-white text-center mt-2">
            Operating Hours
          </h1>
        </div>
        <div className="p-5 bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-md">
          <p className="text-3xl font-semibold text-red-500 text-center">
            ₹1000/-
          </p>
          <h1 className="text-md font-medium text-white text-center mt-2">
            Expense
          </h1>
        </div>

        <div className="p-5 bg-white bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-md">
          <p className="text-3xl font-semibold text-green-500 text-center">
            ₹3000/-
          </p>
          <h1 className="text-md font-medium text-white text-center mt-2">
            Income
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
