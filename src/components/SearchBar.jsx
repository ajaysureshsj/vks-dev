import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="container">
      <form action="" method="post">
        <div className="flex justify-center mb-10">
          <Input
            type="text"
            name="invoice-number"
            placeholder="Search name..."
            className="font-sans md:w-1/3 text-slate-100 rounded-full p-5"
          />
          <Button
            type="submit"
            className="bg-slate-50 text-gray-900 ml-5 hover:bg-slate-200 rounded-full p-5"
          >Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
