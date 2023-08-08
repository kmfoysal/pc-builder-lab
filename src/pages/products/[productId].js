import Image from "next/image";

const ProductDetails = ({ getSingleProduct }) => {
  // Calculate the sum of individualRating values
  const sumOfRatings = getSingleProduct?.reviews?.reduce(
    (sum, review) => sum + review.individualRating,
    0
  );

  // Calculate the average
  const averageRating = Math.floor(
    sumOfRatings / getSingleProduct?.reviews?.length
  );

  const stars = Array(5).fill(0);

  return (
    <div className="px-[10%] py-[5%]">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <Image
            className="mx-auto"
            src={getSingleProduct?.image}
            alt="image"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-3">
          <h3 className="text-3xl font-semibold mb-3">
            {getSingleProduct?.name}
          </h3>
          <div className="flex flex-wrap justify-start items-center gap-3 mb-3">
            <div className="badge badge-primary badge-outline">
              {getSingleProduct?.category}
            </div>
            <div
              className={`badge text-white ${
                getSingleProduct?.status === "In Stock"
                  ? "badge-info"
                  : "badge-secondary"
              }`}
            >
              {getSingleProduct?.status}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Key Features :</h4>
            <ul>
              {getSingleProduct.features.map((feature, index) => (
                <li key={index} className="">
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-3 mb-3">
              Price : ${getSingleProduct?.price}
            </h3>

            <div className="rating items-center">
              {stars.map((star, index) => (
                <input
                  key={index}
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    averageRating > index ? "bg-orange-400" : "bg-orange-200"
                  }`}
                />
              ))}
              <span className="text-xl font-semibold ml-2">
                ({getSingleProduct?.reviews?.length})
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-2 mt-5 text-xl font-semibold">Description :</h4>
        <p>{getSingleProduct?.desc}</p>
      </div>

      <div>
        <h4 className="mb-2 mt-5 text-xl font-semibold">Review :</h4>
        <div>
          {getSingleProduct?.reviews.map((review) => (
            <div key={review.reviewId} className="mb-3">
              <div className="flex flex-wrap justify-between items-center mb-2">
                <h5 className=" font-semibold">{review?.reviewerName}</h5>
                <div className="rating items-center">
                  {stars.map((star, index) => (
                    <input
                      key={index}
                      name="rating-2"
                      className={`mask mask-star-2 w-4 ${
                        review?.individualRating > index
                          ? "bg-orange-400"
                          : "bg-orange-200"
                      }`}
                
                    />
                  ))}
                </div>
              </div>
              <hr className="mb-1" />
              <p>{review?.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      getSingleProduct: data,
    },
  };
};
