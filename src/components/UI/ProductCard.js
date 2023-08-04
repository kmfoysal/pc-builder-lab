import Image from "next/image";

const ProductCard = ({ product }) => {
  // Calculate the sum of individualRating values
  const sumOfRatings = product?.reviews?.reduce(
    (sum, review) => sum + review.individualRating,
    0
  );

  // Calculate the average
  const averageRating = Math.floor(sumOfRatings / product?.reviews?.length);

  const stars = Array(5).fill(0);

  return (
    <div className="card w-full bg-base-100 shadow-lg">
      <figure>
        <Image
          src={product?.image}
          alt={product?.name}
          width={250}
          height={250}
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap justify-between items-center">
          <div className="badge badge-primary badge-outline">
            {product?.category}
          </div>
          <div
            className={`badge text-white ${
              product?.status === "In Stock" ? "badge-info" : "badge-secondary"
            }`}
          >
            {product?.status}
          </div>
        </div>
        <h2 className="truncate text-xl font-semibold">{product?.name}</h2>

        <div className="rating items-center">
          {stars.map((star, index) => (
            <input
              key={index}
              name="rating-2"
              className={`mask mask-star-2 ${averageRating > index ? "bg-orange-400" : "bg-orange-200"}`}
            />
          ))}
          <span className="text-xl font-semibold ml-2 ">({product?.reviews?.length})</span>
        </div>

        <h2 className=" text-2xl font-semibold">${product?.price}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
