import ProductCard from '@/components/UI/ProductCard';
import { useRouter } from 'next/router';

const CategoryDetailsPage = ({getCategoryWiseProducts}) => {

    return (
        <div className="px-[10%] py-[5%] bg-orange-50">
        <h3 className="text-center text-4xl font-semibold mb-20">{getCategoryWiseProducts[0]?.category}</h3>

        <div className="grid grid-cols-3 justify-center justify-items-center gap-10">
          {getCategoryWiseProducts?.map(
            (product) => <ProductCard key={product?._id} product={product} /> )}
        </div>
      </div>
    );
};

export default CategoryDetailsPage;

  export const getStaticPaths = async () => {
    
    const res = await fetch('http://localhost:5000/products');
    const products = await res.json();

    const paths = products?.data?.map((product) => ({
        params: { catName : product?.categoryUrl}
    }))

    return {paths, fallback:false}
  }


  export const getStaticProps = async (context) => {

    const {params} = context ;


    const res = await fetch(`http://localhost:5000/product/${params.catName}`);
    const data = await res.json();

    return {
        props: {
            getCategoryWiseProducts: data
        }
    }
  }