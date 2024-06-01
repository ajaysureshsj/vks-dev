import Image from "next/image";
import { Login } from "@/components/Login";

export default function Home() {
  return (
    <div className="container h-screen w-full flex justify-center align-middle flex-col">
      <Login/>
    </div>
  );
}
