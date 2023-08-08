import Image from "next/image";
import Link from "next/link";

const PcBuilderCategoryCard = ({
  categoryImage,
  categoryName,
  categoryUrl,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={categoryImage} alt="img" width={200} height={200} />
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="card-title">{categoryName}</h2>
          <div className="badge badge-lg badge-warning badge-outline">
            Required
          </div>
        </div>
        <p>Explore your choice from lots of parts !</p>
        <div className="card-actions justify-end">
          <Link href={`/pc-builder-items/${categoryUrl}`}>
            <button className="btn btn-primary">Choose</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderCategoryCard;
