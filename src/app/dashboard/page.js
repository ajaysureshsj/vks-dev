import React from "react";
import Stats from "@/components/Stats";
import DashboardOptions from "@/components/DashboardOptions";
import InvoiceCard from "@/components/InvoiceCard";
import SearchBar from "@/components/SearchBar";
import { Separator } from "@/components/ui/separator";
const Dashboard = () => {
  return (
    <div className="container font-sans">
      <h1 className="text-4xl md:text-3xl font-medium mt-10 mb-5 text-center md:text-left">
        Dashboard
      </h1>
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center align-middle">
        <Stats />
      </div>
      <div className="mt-5">
        <DashboardOptions />
      </div>
      <Separator className="my-5 bg-gray-800" />
      <h2 className="text-2xl font-medium mt-5 text-center md:text-left">Recent Activity</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
    </div>
  );
};

export default Dashboard;
