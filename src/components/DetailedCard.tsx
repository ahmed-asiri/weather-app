import Layout from "./Layout";
import PreviewCard from "./PreviewCard";

function DetailedCard(props: any) {
  return (
    <div className="">
      <Layout>
        <PreviewCard />
        <div className="w-full xs:w-10/12 sm:w-2/3 w- md:w-1/2 p-4 bg-white md:rounded-bl-none rounded-b-xl md:rounded-tr-xl  relative md:-left-2">
          tEST TESCT <br /> test
        </div>
      </Layout>
    </div>
  );
}

export default DetailedCard;
