import WeatherPreview from "./WeatherPreview";

function DetailedWeatherCard(props: any) {
  return (
    <div className="">
      <div className="detailed-weather-card flex drop-shadow-lg max-w-3xl m-auto bg-transparent">
        <WeatherPreview />
        <div className="right-side w-1/2 bg-white rounded-br-xl rounded-tr-xl p-8 relative -left-2"></div>
      </div>
    </div>
  );
}

export default DetailedWeatherCard;
