
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateCart = () => {
    const singleProduct =useLoaderData()
    const [singlProduct,setSinglProduct]=useState(singleProduct)
    useEffect(()=>{
        setSinglProduct(singleProduct)
    },[])
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const type = form.type.value
        const description = form.description.value
        const rating = form.rating.value

        const UpdateProduct = {
            photo, name, price, description, brand, type,rating
        }
        fetch(`http://localhost:4005/products/${singleProduct._id}`,{
            method:"PUT",
            headers:{
                'content-type':"application.json"
            },
            body:JSON.stringify(UpdateProduct)
        })
        .then(res=>(res.json()))
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
            toast.success('Update Successful')
        }})
        
        
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Update Product</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="photo" defaultValue={singlProduct.photo} placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={singlProduct.name} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select name="brand" defaultValue={singlProduct.brand} className="input input-bordered" required>
                                <option value="apple">Apple</option>
                                <option value="google">Google</option>
                                <option value="oneplus">One PLus</option>
                                <option value="samsung">Samsung</option>
                                <option value="sony">Sony</option>
                                <option value="intel">Intel</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select name="type" defaultValue={singlProduct.type} className="input input-bordered" required>
                                <option value="Phone">Phone</option>
                                <option value="Computer">Computer</option>
                                <option value="HeadPhone">HeadPhone</option>
                                <option value="Watch">Watch</option>

                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" defaultValue={singlProduct.price} name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" defaultValue={singlProduct.description} name="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" defaultValue={singlProduct.rating} name="rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UpdateCart;