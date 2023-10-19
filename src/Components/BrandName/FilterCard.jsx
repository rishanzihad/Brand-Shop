/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const FilterCard = ({ product }) => {

  const { _id, name, photo, price, description, brand, type, rating } = product

  const ratingStars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="text-yellow-500">★</span>
  ));


  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={rating + index} className="text-yellow-300">☆</span>
  ));
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 flex-1 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
        <img
          src={photo}
          className="object-cover w-full h-[400px]"
        />
      </div>
      <div className="p-6">
        <div className="flex  items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-gray-600">
            Name: {name}
          </p>

          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
            Price:${price}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
            Brand:{brand.toUpperCase()}
          </p>
          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
            Type: {type}
          </p>
        </div>
        <div className="flex items-center justify-around">
          <div className="block mt-2 font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
            {ratingStars}
            {emptyStars}

          </div>

        </div>

      </div>
      <div className="px-6  pb-2">
      <Link className="btn bg-red-300 w-full" to={`/details/${_id}`}> <button >Details</button></Link>
      </div>

      <div className="p-6 pt-0">
        <Link to={`/update/${_id}`}>
          <button
            className="block bg-black w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Update
          </button>
        </Link>
      </div>
    </div>

  );
};

export default FilterCard;