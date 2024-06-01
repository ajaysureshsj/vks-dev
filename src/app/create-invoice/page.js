"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const page = () => {
  const [items, setItems] = useState([
    { serviceName: "", startingTime: "", closingTime: "", remarks: "" },
  ]);

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = items.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      { serviceName: "", startingTime: "", closingTime: "", remarks: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  }
  return (
    <div className="container lg:w-2/3">
      <h1 className="font-sans text-3xl font-medium text-center my-5 mb-10">
        New Invoice
      </h1>
      <form action="" method="post">
        <h1 className="font-sans text-2xl font-medium my-5">Farmer Details</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="mb-5">
            <Label className="font-sans text-md">First name</Label>
            <Input type="text" name="firstName" className="font-sans mt-2" />
          </div>
          <div className="mb-5">
            <Label className="font-sans text-md">Last name</Label>
            <Input type="text" name="lastName" className="font-sans mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-5">
            <Label className="font-sans text-md">Mobile number</Label>
            <Input
              type="text"
              name="farmerMobileNumber"
              className="font-sans mt-2"
            />
          </div>
          <div className="mb-5">
            <Label className="font-sans text-md">Is member</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue
                  placeholder="Select Service"
                  type="text"
                  name="serviceName"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Yes</SelectItem>
                <SelectItem value="dark">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-5">
          <Label className="font-sans text-md">Address</Label>
          <Input type="text" name="address" className="font-sans mt-2" />
        </div>
        <Separator className="my-5 bg-gray-900" />
        <h1 className="font-sans text-2xl font-medium mb-5">Driver Details</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-5">
            <Label className="font-sans text-md">Driver name</Label>
            <Input type="text" name="driverName" className="font-sans mt-2" />
          </div>
          <div className="mb-5">
            <Label className="font-sans text-md">Mobile number</Label>
            <Input
              type="text"
              name="driverMobileNumber"
              className="font-sans mt-2"
            />
          </div>
        </div>
        <Separator className="my-5 bg-gray-900" />
        <h1 className="font-sans text-2xl font-medium mb-5">Service Details</h1>
        <div className="mb-5">
          <Label className="font-sans text-md">Shifting charge</Label>
          <Input
            type="Number"
            name="shiftingCharge"
            className="font-sans mt-2"
          />
        </div>
        {items.map((item, index) => (
          <div key={index}>
            <Label className="font-sans text-md">
              Service Name:
              <Select>
                <SelectTrigger className="mt-2 font-normal">
                  <SelectValue
                    placeholder="Select Service"
                    type="text"
                    name="serviceName"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Cultivator</SelectItem>
                  <SelectItem value="dark">Rotator</SelectItem>
                  <SelectItem value="system">Disc</SelectItem>
                </SelectContent>
              </Select>
            </Label>
            <div className="grid grid-cols-2 gap-5 my-5">
              <Label className="font-sans text-md">
                Starting Time:
                <Input
                  type="time"
                  name="startingTime"
                  className="mt-2"
                  value={item.startingTime}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </Label>
              <Label className="font-sans text-md">
                Closing Time:
                <Input
                  type="time"
                  name="closingTime"
                  className="mt-2"
                  value={item.closingTime}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </Label>
            </div>
            <Label className="font-sans text-md">
              Remarks:
              <Input
                type="text"
                name="remarks"
                className="mt-2"
                value={item.remarks}
                onChange={(e) => handleItemChange(index, e)}
              />
            </Label>
            <br />
          </div>
        ))}
        <div className="flex justify-end">
          <Button
            type="button"
            onClick={addItem}
            className="bg-slate-50 hover:bg-slate-200 text-gray-900"
          >
            Add Item
          </Button>
        </div>
        <Separator className="my-5 bg-gray-800" />
        <h1 className="font-sans text-2xl font-medium mb-5">Other Expenses</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-5">
            <Label className="font-sans text-md">Diesel + Extra</Label>
            <Input type="text" name="extraCost" className="font-sans mt-2" />
          </div>
          <div className="mb-5">
            <Label className="font-sans text-md">Remarks</Label>
            <Input type="text" name="extraRemarks" className="font-sans mt-2" />
          </div>
        </div>
        <Separator className="my-10 bg-gray-800" />
        <div className="flex justify-center mb-5">
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-slate-50 hover:bg-slate-200 text-gray-900"
          >
            Create Invoice
          </Button>
        </div>
        </form>
    </div>
  );
};

export default page;
