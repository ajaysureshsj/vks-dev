import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Login = () => {
  return (
    <div className="container w-1/3 h-fit flex flex-col justify-center p-10 rounded-xl">
      <h1 className="font-sans text-3xl font-medium text-center mb-5">Login</h1>
      <form action="" method="post">
        <div className="mb-5">
          <Label className="font-sans text-md">Username</Label>
          <Input type="email" name="email" className="font-sans mt-2" />
        </div>
        <div className="mb-5">
          <Label className="font-sans text-md">Password</Label>
          <Input type="password" name="password" className="font-sans text-md mt-2"/>
        </div>
        <div>
          <Button type="submit" className="bg-slate-50 text-gray-900 mt-5 w-full hover:bg-slate-200">Log In</Button>
        </div>
      </form>
    </div>
  );
};
