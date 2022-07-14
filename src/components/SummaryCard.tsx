function SummaryCard(props: any) {
  return (
    <div className="mx-4 bg-card m-auto p-2 rounded-lg text-white flex flex-row justify-between shadow-md">
      <div className="flex">
        <img
          className="h-12"
          src={require("../assets/images/rainy-day.png")}
          alt="rainy day"
        />
        <div className="text-center ml-2 ">
          <p className="text-2xl">33.90 </p>
          <p className="text-sm leading-none">Rainy</p>
        </div>
      </div>
      <div className="grid place-items-center">
        <p className="text-sm ">Saturday 9 Jul, 2022</p>
      </div>
    </div>
  );
}

export default SummaryCard;
