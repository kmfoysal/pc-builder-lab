import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = () => {
  const categories = [
    {
      categoryName: "CPU / Processor",
      categoryFeaturedImage:
        "https://www.startech.com.bd/image/cache/catalog/processor/intel/i9-12900ks/i9-12900ks-01-500x500.jpg",
      categoryUrl: "processor",
    },
    {
      categoryName: "Motherboard",
      categoryFeaturedImage:
        "https://www.startech.com.bd/image/cache/catalog/component/motherboard/asus/asus-rog-strix-x570-f-motherboard/asus-rog-strix-x570-f-motherboard-500x500.jpg",
      categoryUrl: "motherboard",
    },
    {
      categoryName: "RAM",
      categoryFeaturedImage:
        "https://www.startech.com.bd/image/cache/catalog/ram/team/delta-tuf/delta-tuf-001-500x500.jpg",
      categoryUrl: "ram",
    },
    {
        categoryName: "Power Supply Unit",
        categoryFeaturedImage:
          "https://www.startech.com.bd/image/cache/catalog/power-supply/asus/rog-thor-850p/rog-thor-850p-box-500x500.jpg",
        categoryUrl: "",
      },{
        categoryName: "Storage Device",
        categoryFeaturedImage:
          "https://www.startech.com.bd/image/cache/catalog/ssd/seagate/ironwolf-125-500gb/ironwolf-125-500gb-01-500x500.webp",
        categoryUrl: "power-supply-unit",
      },{
        categoryName: "Monitor",
        categoryFeaturedImage:
          "https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/48gq900-b/48gq900-b-01-500x500.jpg",
        categoryUrl: "monitor",
      },
  ];
  return (
    <div className="px-[10%] py-[5%] bg-indigo-50">
      <h3 className="text-center text-5xl font-semibold mb-10">
        Featured Category
      </h3>
      <div className="grid grid-cols-3 justify-center justify-items-center gap-10" >
        {categories.map((category, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <Image
                src={category?.categoryFeaturedImage}
                alt="img"
                width={200}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category.categoryName}</h2>
              <p>Explore your choice from lots of parts !</p>
              <div className="card-actions justify-end">
                <Link href={`/categories/${category.categoryUrl}`}>
                    <button className="btn btn-primary">View All</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
