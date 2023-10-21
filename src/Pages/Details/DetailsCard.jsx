import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";



const DetailsCard = ({product}) => {
  const navigate =useNavigate()
  const {user}=useContext(AuthContext)
  
    const {description,photo,name,price,type,brand}=product
    const addProduct ={
      email:user.email,
      photo:product.photo,
       name:product.name,
       price:product.price , 
       description:product.description,
        brand:product.brand,
        type:product.type, 
        rating:product.rating
    }
    
    const handleAddCart=()=>{
      fetch(`https://tech-server-sand.vercel.app/carts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              toast.success('Product Added in Cart Successfully');
              navigate('/');
          })

        
    }
    return (
    <div className="mt-10">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative   mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
   <div className="h-[100vh] flex-1 w-full">
   <img
      src={photo}
      alt="img-blur-shadow"
      className=" h-full  w-full "
      
    
    />
   </div>
  </div>
  <div className="p-6">
    <div className="flex justify-around">
    <h5 className="block mb-2 font-semibold font-sans text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h5>
    <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
     Price:${price}
    </p>
    </div>
    <div className=" flex justify-around mb-2">
    <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
     Type:{type}
    </p>
    <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
     Brand:{brand}
    </p>
    </div>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button onClick={handleAddCart}
      className="select-none w-full rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="btn"
      data-ripple-light="true"
    >
      Add to Cart
    </button>
  </div>
</div>

    </div>
    );
};

export default DetailsCard;