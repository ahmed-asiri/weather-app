import Address from "./Address";
import DayPredict from "./DayPredict";
import Metric from "./Metric";

function InfoCard(props: any) {
  return (
    <div className="w-full xs:w-10/12 sm:w-2/3 w- md:w-1/2 p-4 md:pl-6 bg-white md:rounded-bl-none rounded-b-xl md:rounded-tr-xl  relative md:-left-2">
      <Address />
      <p className="text-black-primary text-xs">Saturday 9 Jul, 2022</p>
      <div className="metrics flex flex-wrap mt-2.5 gap-x-metric gap-y-4">
        <Metric />
        <Metric />
        <Metric />
        <Metric />
      </div>
      <div className="flex mt-4 gap-x-4">
        <DayPredict />
        <DayPredict />
        <DayPredict />
      </div>
    </div>
  );
}

export default InfoCard;
