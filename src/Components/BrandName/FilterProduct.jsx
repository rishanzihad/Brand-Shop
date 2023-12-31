import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FilterCard from "./FilterCard";
import AppleSlider from "../Slider/AppleSlider";




const FilterProduct = () => {
    const products =useLoaderData()
  
    const [product,setProduct]=useState([])
    const [noAddProduct, setNoAddProduct] =useState(false)
    const{brandName}=useParams()
    
    
    useEffect(()=>{
        const filterProduct =products && products?.filter(product => product.brand == brandName.toLowerCase())
        if(filterProduct.length>0){
            
            setProduct(filterProduct)
        }
        else{
           
            setNoAddProduct('No Product Found')
        }
        
       
    },[brandName,products])
 

    return (
        noAddProduct ? <p className="h-[50vh] flex justify-center items-center">{noAddProduct}</p>:
       <div>
        <AppleSlider></AppleSlider>
        <h1 className="text-5xl font-bold text-center">Our Products</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           
           {
           product.map(product=> <FilterCard key={product._id} product={product}></FilterCard>)
           }
        </div>
       </div>
    );
};

export default FilterProduct;