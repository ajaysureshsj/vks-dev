import {
  TimerIcon,
  StarFilledIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
const InvoiceCard = () => {
  return (
    <div className="container font-sans">
      <div className="w-full font-sans rounded-xl bg-green-100 text-gray-900">
        <div className="p-2 bg-green-500 w-2/3 rounded-tl-xl rounded-br-3xl flex">
          <StarFilledIcon className="h-6 w-6 text-white mr-1"></StarFilledIcon>
          <p className="text-gray-900 font-sans font-medium">VKS Member</p>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold">Suresh V</h1>
          <div className="flex gap-2 mt-2">
            <p className="p-1 px-2 bg-white bg-opacity-10 backdrop-blur-md border border-gray-900  rounded-full">
              #1
            </p>
            <p className="p-1 px-2 bg-white bg-opacity-10 backdrop-blur-md border border-gray-900 rounded-full">
              13/05/24
            </p>
            <p className="p-1 px-2 bg-white bg-opacity-10 backdrop-blur-md border border-gray-900  rounded-full">
              Monday
            </p>
          </div>
          <div className="flex gap-1 mt-2 flex-row justify-start align-middle">
            <TimerIcon className="h-5 w-5 mt-1"></TimerIcon>
            <p className="text-md">3hrs 36mins</p>
            <DotFilledIcon className="h-5 w-5 mt-1"></DotFilledIcon>
            <p className="text-md">Cultivator, Rotator</p>
          </div>
          <h1 className="text-xl mt-3 font-medium">₹2170/-</h1>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
