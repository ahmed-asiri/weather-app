import InfoSection from "./InfoSection";
import Layout from "./Layout";
import PreviewSection from "./PreviewSection";

function DetailedCard(props: any) {
  return (
    <div className="">
      <Layout>
        <PreviewSection />
        <InfoSection />
      </Layout>
    </div>
  );
}

export default DetailedCard;
