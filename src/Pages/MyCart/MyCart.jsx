import { useLoaderData } from "react-router-dom";
import OneCart from "./OneCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyCart = () => {
    const myCart = useLoaderData()
    const { user } = useContext(AuthContext)
    
    const [haveProduct, setHaveProduct] = useState(myCart)
    const [noCard,setNoCard]=useState(false)
    const email = user.email

    useEffect(() => {
        const filterAddCart = haveProduct && haveProduct?.filter(product => product.email == email.toLowerCase())


        

        if(filterAddCart.length>0){
            setHaveProduct(filterAddCart)
        
        
            }
            else{
                setNoCard('No Cart Added')
            }

    }, [email])
    //if(myCart.length<0){

    //  return setNoAddCart('No Data Found')

    //}


    return (
        noCard ? <p className="h-[50vh] flex justify-center items-center">{noCard}</p>:
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">

            {

             haveProduct.map(cart=><OneCart key={cart._id} cart={cart}></OneCart>)
            }


        </div>
    );
};

export default MyCart;