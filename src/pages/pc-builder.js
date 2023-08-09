import Monitor from "@/components/UI/Monitor";
import Motherboard from "@/components/UI/Motherboard";
import PcBuilderCard from "@/components/UI/PcBuilderCard";
import PowerSupplyUnit from "@/components/UI/PowerSupplyUnit";
import Processor from "@/components/UI/Processor";
import Ram from "@/components/UI/Ram";
import StorageDevice from "@/components/UI/StorageDevice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PcBuilder = () => {

  const router = useRouter();

  const { processor, motherboard, ram, powerSupply, storage, monitor, total } =
    useSelector((state) => state.builder);

    const isSelected = processor?._id && motherboard?._id && powerSupply?._id && ram?._id && storage?._id && monitor?._id 

  return (
    <div className="px-[10%] py-[5%]">
    <h4 className=" text-2xl font-semibold text-center mb-10">Estimated Total Cost : ${total}</h4>
      <div className="grid grid-cols-3 justify-center justify-items-center gap-10">
        {processor?._id ? (
          <PcBuilderCard builderItem={processor} />
        ) : (
          <Processor />
        )}

        {motherboard?._id ? (
          <PcBuilderCard builderItem={motherboard} />
        ) : (
          <Motherboard />
        )}

        {powerSupply?._id ? (
          <PcBuilderCard builderItem={powerSupply} />
        ) : (
          <PowerSupplyUnit />
        )}

        {ram?._id ? <PcBuilderCard builderItem={ram} /> : <Ram />}

        {storage?._id ? (
          <PcBuilderCard builderItem={storage} />
        ) : (
          <StorageDevice />
        )}

        {monitor?._id ? <PcBuilderCard builderItem={monitor} /> : <Monitor />}
      </div>

      <div className="text-center">
      {isSelected && <button className="btn btn-primary mt-10" onClick={()=> {alert("Successfully Build your Pc !"); router.push('/')}}>Complete Build</button>}
      </div>
    </div>
  );
};

export default PcBuilder;
