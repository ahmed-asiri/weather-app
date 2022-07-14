function Metric(props: any) {
  return (
    <div className="metric w-m w-1-of-2 bg-metric-background rounded shadow-md py-2 px-3">
      <h4 className="text-gray-500 text-sm">Humadity</h4>
      <div className="text-metric-foreground text-center my-1 text-2xl">
        12%
      </div>
    </div>
  );
}

export default Metric;
