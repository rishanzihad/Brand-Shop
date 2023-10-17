

const BrandCard = ({brand}) => {
   
    const {brandName,Image}=brand
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 w-full pt-10">
          <img src={Image} alt="Shoes" className="rounded-xl w-full h-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brandName}</h2>

          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BrandCard;