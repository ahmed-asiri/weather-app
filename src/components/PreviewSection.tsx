// import image from "../assets/images/beams.jpeg";

function PreviewSection(props: any) {
  return (
    <div className="relative xs:w-10/12 sm:w-2/3 md:w-1/2 bg-card md:rounded-xl rounded-t-xl  z-10 text-primary p-4 text-center ">
      <p className="absolute top-2 left-2">Today</p>
      <img
        src={require("../assets/images/rainy-day.png")}
        alt="rainy day"
        className="w-2/3 m-auto my-5 drop-shadow-lg"
      />
      <p className="text-3xl font-semibold md:text-5xl relative inline-block m-auto">
        41.93 <span className="font-light absolute -top-2 -right-4">&deg;</span>
      </p>
      <p className="mt-2">Rainy</p>
    </div>
  );
}

export default PreviewSection;
