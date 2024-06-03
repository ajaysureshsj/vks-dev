import React from "react";
import { NavBar } from "@/components/NavBar";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <div className="container mt-10 font-sans w-full">
      <h1 className="text-5xl font-bold mb-10 text-center">Dashboard</h1>
      <Stats></Stats>
      <div className="flex justify-center">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default page;
