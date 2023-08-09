import {
  addToBuilder,
  removeFromBuilder
} from "@/redux/features/addToBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const PcBuilderCard = ({ builderItem }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = (builderItem) => {
  
    dispatch(addToBuilder(builderItem))

    router.push("/pc-builder");
  };

  const handleRemove = (builderItem) => {
    dispatch(removeFromBuilder(builderItem));
  };

  return (
    <div className="card w-full card-side bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <Image src={builderItem?.image} alt="img" width={150} height={150} />
      </figure>
      <div className="card-body overflow-hidden">
        <Link href={`/products/${builderItem?._id}`} className="truncate text-xl font-semibold">{builderItem?.name}</Link>
        <div className="badge badge-lg badge-primary badge-outline">
          {builderItem?.status}
        </div>
        <div className="card-actions justify-between items-center">
          <h5 className=" text-2xl font-semibold">${builderItem?.price}</h5>

          {router.pathname === "/pc-builder" ? (
            <button
              className="btn btn-warning"
              onClick={() => handleRemove(builderItem)}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => handleAddToBuilder(builderItem)}
            >
              Add To Builder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcBuilderCard;
