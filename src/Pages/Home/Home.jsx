import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandName/BrandCard";




const Home = () => {
    const brands =useLoaderData()
    console.log(brands)
    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {
            
            brands.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
          
      }
         </div>
        </div>
    );
};

export default Home;