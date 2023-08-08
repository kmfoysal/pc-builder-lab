import PcBuilderCard from "@/components/UI/PcBuilderCard";
import React from "react";

const BuilderItems = ({ pcBuilderItems }) => {
  return (
    <div className="px-[10%] py-[5%] bg-indigo-50">
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
    `http://localhost:5000/product/${params.itemsCatName}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      pcBuilderItems: data,
    },
  };
};
