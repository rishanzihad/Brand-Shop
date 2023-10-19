
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const OneCart = ( {cart} ) => {
   
    const [haveProduct, setHaveProduct] = useState(cart)
    console.log(haveProduct)
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
                        if(data.deletedCount>0){
                            const remaining = haveProduct.filter(item => item._id !== _id);
                            setHaveProduct(remaining);
                            console.log(remaining)
                        }
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

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4  mt-4 flex-1 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img
                    src={photo}
                    className="object-cover w-full h-full"
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
                <div className='mt-4'>
                    <button onClick={() => handleDelete(_id)} className='btn w-full bg-red-600 text-white hover:text-black'>Delete</button>
                </div>
            </div>



        </div>
    );
};

export default OneCart;