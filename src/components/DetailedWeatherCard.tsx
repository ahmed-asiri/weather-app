import WeatherPreview from "./WeatherPreview";

function DetailedWeatherCard(props: any) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row relative drop-shadow-lg max-w-3xl m-auto bg-transparent justify-center items-center md:items-stretch px-4">
        <WeatherPreview />
        <div className="w-full xs:w-10/12 sm:w-2/3 w- md:w-1/2 p-4 bg-white md:rounded-bl-none rounded-b-xl md:rounded-tr-xl  relative md:-left-2">
          tEST TESCT <br /> test
        </div>
      </div>
    </div>
  );
}

export default DetailedWeatherCard;
