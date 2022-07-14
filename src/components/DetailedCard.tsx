import InfoCard from "./InfoCard";
import Layout from "./Layout";
import PreviewCard from "./PreviewCard";

function DetailedCard(props: any) {
  return (
    <div className="">
      <Layout>
        <PreviewCard />
        <InfoCard />
      </Layout>
    </div>
  );
}

export default DetailedCard;
