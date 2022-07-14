import React from "react";
import DetailedCard from "./DetailedCard";
import SummaryCard from "./SummaryCard";

function App(props: any) {
  return (
    <div className="container  min-h-screen m-auto py-8">
      <DetailedCard />
      <div className="flex flex-col justify-center max-w-3xl m-auto mt-6 gap-y-4 w-full xs:w-10/12 sm:w-2/3 w- md:w-1/2 lg:w-1/2">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
}

export default App;
