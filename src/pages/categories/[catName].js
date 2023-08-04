import { useRouter } from 'next/router';

const CategoryDetailsPage = ({allProducts}) => {

    const router = useRouter();

    console.log(router);

    // const existingCategoriesData = allProducts.filter((product) => product.category === )

    return (
        <div>
            ghgfhfhfghfg
        </div>
    );
};

export default CategoryDetailsPage;


// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:3000/api/products");
  
//     const data = await res.json();
//     // console.log(data);
//     return {
//       props: {
//         allProducts: data.data, // when using internal API connected with mongoDB
//       },
//       revalidate: 10,
//     };
//   };
  