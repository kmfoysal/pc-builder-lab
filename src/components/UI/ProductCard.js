const ProductCard = ({product}) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={product?.image}
          alt={product?.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <div className="badge badge-primary badge-outline">{product?.category}</div>
        <h2 className="card-title">{product?.price}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
