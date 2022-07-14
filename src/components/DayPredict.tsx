function DayPredict(props: any) {
  return (
    <div className="text-center ">
      <img
        className="w-14 m-auto"
        src={require("../assets/images/rainy-day.png")}
        alt="rainy day"
      />
      <p className="text-metric-foreground mt-1">41.95</p>
      <p className="text-black-primary text-xs">10:30</p>
    </div>
  );
}

export default DayPredict;
