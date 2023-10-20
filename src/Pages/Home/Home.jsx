import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandName/BrandCard";
import Banner from "../../Components/Banner/Banner";
import Supplier from "../../Components/Our Supplier/Supplier";
import Service from "../../Components/OurService/Service";





const Home = () => {
    const brands = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div className="mt-5">
                <h1 className="text-5xl font-bold text-center">Our Brands</h1>
                <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                    {

                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)

                    }
                </div>
            </div>
                    <Supplier></Supplier>
                    <Service></Service>
        </div>
    );
};

export default Home;