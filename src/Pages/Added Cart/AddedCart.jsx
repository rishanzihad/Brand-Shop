
const AddedCart = () => {
    const handleAddedProduct = e => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const type = form.type.value
        const description = form.description.value
        const rating = form.rating.value
        const addedProduct = {
            photo, name, brand, price, description, rating, type
        }
        console.log(addedProduct)
        fetch('http://localhost:4005/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Added Product</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddedProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="photo" placeholder="ImageURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select name="type" className="input input-bordered" required>
                                    <option value="option1">Apple</option>
                                    <option value="option2">Google</option>
                                    <option value="option3">One PLus</option>
                                    <option value="option4">Samsung</option>
                                    <option value="option5">Sony</option>
                                    <option value="option6">Intel</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name="type" className="input input-bordered" required>
                                    <option value="option1">Phone</option>
                                    <option value="option2">Computer</option>
                                    <option value="option3">Head Phone</option>
                                    <option value="option4">Watch</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" placeholder="Short Description" name="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Rating"
                                    name="rating"
                                    className="input input-bordered"
                                    required
                                    min="1"
                                    max="5"
                                    step="0.1"
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedCart;