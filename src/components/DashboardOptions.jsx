import Link from "next/link";
import React from "react";
import { PlusCircledIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

const DashboardOptions = () => {
  return (
    <div className="container flex gap-3 justify-center">
      <Link href="/create-invoice"> 
      <Button className="bg-slate-50 text-gray-900 rounded-full hover:bg-slate-200 p-5">
        <PlusCircledIcon className="md:mr-2 h-6 w-6 text-gray-900" />{" "}
        <span className="hidden md:block">Create Invoice</span>
      </Button>
      </Link>
      <Button className="bg-slate-50 text-gray-900 rounded-full hover:bg-slate-200 p-5">
        <Pencil1Icon className="md:mr-2 h-6 w-6 text-gray-900" />{" "}
        <span className="hidden md:block">Edit Invoice</span>
      </Button>
      <Drawer>
        <DrawerTrigger>
          <Button className="bg-slate-50 text-gray-900 rounded-full hover:bg-slate-200 p-5">
            <TrashIcon className="md:mr-2 h-6 w-6 text-gray-900" />
            <span className="hidden md:block">Delete Invoice</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-gray-900 border-none">
          <DrawerHeader>
            <DrawerTitle className="text-center">Delete Invoice</DrawerTitle>
            <DrawerDescription className="text-center">
              Enter the invoice number below
            </DrawerDescription>
            <div className="flex justify-center">
              <Input
                type="number"
                name="invoice-number"
                placeholder="Invoice Number"
                className="font-sans mt-2 md:w-1/3 text-slate-100"
              />
            </div>
          </DrawerHeader>
          <DrawerFooter className="grid grid-cols-2">
            <Button className="bg-red-500 hover:bg-red-400">View</Button>
            <DrawerClose>
              <Button variant="outline" className="w-full text-gray-900 bg-slate-200 hover:bg-slate-50">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DashboardOptions;
