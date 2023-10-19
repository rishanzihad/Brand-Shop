/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
   
    const {brandName,Image}=brand
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
        <figure className=" w-full ">
          <img src={Image} alt="Shoes" className="rounded-xl w-full h-72" />
        </figure>
        <div className="  p-5  items-center text-center">
          
          <Link className="btn w-full btn-secondary-full" to={`/products/${brandName}`}> {brandName}</Link>
          
        </div>
      </div>
        </div>
    );
};

export default BrandCard;