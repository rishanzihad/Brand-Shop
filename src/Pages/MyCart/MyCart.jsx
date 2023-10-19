import { useLoaderData } from "react-router-dom";
import OneCart from "./OneCart";
import { useState } from "react";


const MyCart = () => {
    const myCart =useLoaderData()
   
    const [noAddCart, setNoAddCart] =useState(false)
    
    if(myCart.length<0){
            
         return setNoAddCart('No Data Found')
        
    }
   
   
    return (
        noAddCart ? <p className="h-[50vh] flex justify-center items-center">{noAddCart}</p>:
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                myCart.map(cart=><OneCart key={cart._id} cart={cart}></OneCart>)
            }
        </div>
    );
};

export default MyCart;