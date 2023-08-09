import ProductCard from '@/components/UI/ProductCard';

const Products = ({allProducts}) => {
    return (
        <div className="px-[10%] py-[5%] bg-orange-50">
        <h3 className="text-center text-4xl font-semibold mb-20">All Products</h3>

        <div className="grid grid-cols-3 justify-center justify-items-center gap-10">
          {allProducts?.map(
            (product) => <ProductCard key={product?._id} product={product} /> )}
        </div>
      </div>
    );
};

export default Products;

export const getStaticProps = async () => {
    const res = await fetch("https://pc-builder-lab-server.onrender.com/products");
  
    const data = await res.json();
    
    return {
      props: {
        allProducts: data.data,
      },
      revalidate: 10,
    };
  };