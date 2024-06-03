import React from "react";
import Link from "next/link";
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

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 bg-white p-6 w-2/3 lg:w-1/3 rounded-full lg:p-1">
      <div className="flex justify-around">
        <div>
          <Link href="/create-invoice">
            <img src="assets/pen.gif" alt="" className="h-20 w-20" />
          </Link>
        </div>
        <div>
          <Link href="/create-invoice">
            <img src="assets/edit.gif" alt="" className="h-20 w-20" />
          </Link>
        </div>
        <div className="flex justify-center">
          <Drawer className="md:w-1/3">
            <DrawerTrigger>
                <img src="assets/trash-bin.gif" alt="" className="h-20 w-20" />
            </DrawerTrigger>
            <DrawerContent className="bg-gray-900 border-none">
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Delete Invoice
                </DrawerTitle>
                <DrawerDescription className="text-center">
                  Enter the invoice number below
                </DrawerDescription>
                <div className="flex justify-center">
                  <Input
                    type="number"
                    name="invoice-number"
                    placeholder="Invoice Number"
                    className="font-sans mt-2 md:w-1/3 text-slate-100 border-none"
                  />
                </div>
              </DrawerHeader>
              <DrawerFooter className="grid grid-cols-2">
                <Button className="bg-green-500 hover:bg-green-400">View</Button>
                <DrawerClose>
                  <Button
                    variant="outline"
                    className="w-full text-gray-900 bg-slate-200 hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
