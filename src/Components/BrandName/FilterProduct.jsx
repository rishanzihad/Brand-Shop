import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FilterCard from "./FilterCard";


const FilterProduct = () => {
    const products =useLoaderData()
   
    const [product,setProduct]=useState([])
    const{brandName}=useParams()
    

    useEffect(()=>{
        const filterProduct =products && products?.filter(product => product.brand == brandName.toLowerCase())
        setProduct(filterProduct)
       
    },[brandName,products])
    console.log(product)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
           product.map(product=> <FilterCard key={product._id} product={product}></FilterCard>)
           }
        </div>
    );
};

export default FilterProduct;