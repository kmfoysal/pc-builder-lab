import PcBuilderCard from "@/components/UI/PcBuilderCard";

const BuilderItems = ({ pcBuilderItems }) => {
  return (
    <div className="px-[10%] py-[5%]">
      <div className="grid grid-cols-3 justify-center justify-items-center gap-10">
        {pcBuilderItems.map((item, index) => (
          <PcBuilderCard key={index} builderItem={item} />
        ))}
      </div>
    </div>
  );
};

export default BuilderItems;

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-lab-server.onrender.com/product/${params.itemsCatName}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      pcBuilderItems: data,
    },
  };
};
