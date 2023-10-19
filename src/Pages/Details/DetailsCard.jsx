

const DetailsCard = ({product}) => {
    const {description,photo,name}=product
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
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none w-full rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
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