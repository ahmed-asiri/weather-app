import React from "react";
import DetailedWeatherCard from "./DetailedWeatherCard";

function App(props: any) {
  return (
    <div className="container  min-h-screen m-auto py-8">
      <DetailedWeatherCard />
    </div>
  );
}

export default App;
