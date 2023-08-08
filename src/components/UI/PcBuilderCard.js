import {
  addMonitor,
  addMotherboard,
  addPowerSupply,
  addProcessor,
  addRam,
  addStorage,
} from "@/redux/features/addToBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const PcBuilderCard = ({ builderItem }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = (builderItem) => {
    switch (builderItem?.categoryUrl) {
      case "processor":
        dispatch(addProcessor(builderItem));
        break;
      case "motherboard":
        dispatch(addMotherboard(builderItem));
        break;
      case "ram":
        dispatch(addRam(builderItem));
        break;
      case "power-supply-unit":
        dispatch(addPowerSupply(builderItem));
        break;
      case "storage":
        dispatch(addStorage(builderItem));
        break;
      case "monitor":
        dispatch(addMonitor(builderItem));
        break;
      default:
        break;
    }

    router.push("/pc-builder");
  };

  return (
    <div className="card w-full card-side bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <Image src={builderItem?.image} alt="img" width={150} height={150} />
      </figure>
      <div className="card-body overflow-hidden">
        <h2 className="truncate text-xl font-semibold">{builderItem?.name}</h2>
        <div className="badge badge-lg badge-primary badge-outline">
          {builderItem?.status}
        </div>
        <div className="card-actions justify-between items-center">
          <h5 className=" text-2xl font-semibold">${builderItem?.price}</h5>

          <button
            className="btn btn-primary"
            onClick={() => handleAddToBuilder(builderItem)}
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderCard;
