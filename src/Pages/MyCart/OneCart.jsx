import { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const OneCart = ({ cart }) => {
  
    const [haveProduct, setHaveProduct] = useState(cart)
  

    const { _id, name, photo, price, brand, type, rating } = haveProduct
   
    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4005/carts/${_id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Delete Successful')
                       // if (data.deletedCount > 0) {
                           // const remaining = haveProduct.filter(item => item._id !== _id);
                         //   setHaveProduct(remaining);
                          //  console.log(remaining)
                       // }
                    })
            }
        })
    }
    const ratingStars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="text-yellow-500">★</span>
    ));


    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
        <span key={rating + index} className="text-yellow-300">☆</span>
    ));
    return (

        <div className="relative flex h-[480px]  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative   mt-4 flex-1 overflow-hidden text-gray-700 bg-white h-full  rounded-l-lg bg-clip-border">
                <img
                    src={photo}
                    className="object-cover w-full h-full"
                />
            </div>
            <div>

            <div className="relative flex w-full max-w-[20rem] h-full mt-4 flex-col rounded-r-lg  bg-gradient-to-tr from-red-600 to-green-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-semibold leading-normal text-white uppercase">
                       {name}
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">$</span>{price}
                       
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                               <span className='font-bold'>Brand:</span>{brand.toUpperCase()}
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                              <span className='font-bold'>Type:</span>{type}
                            </p>
                        </li>
                       
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                1 year free updates
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Life time technical support
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-around">
                <div className="block mt-2 font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
                    {ratingStars}
                    {emptyStars}

                </div>

                </div>
                <div className="p-0 mt-4">
                    <button
                    onClick={() => handleDelete(_id)}
                        className="block w-full btn  bg-red-600 text-white hover:text-black select-none rounded-lg py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Delete
                    </button>
                </div>
            </div>


            </div>

           
            




        </div>
    );
};

export default OneCart;