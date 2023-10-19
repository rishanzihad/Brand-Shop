

const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/rvBprQZ/210906.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold">Technology And Electronics</h1>
                    <p className="mb-5 max-w-4xl font-semibold">Welcome to a World of Innovation and Connectivity. Explore the Future of Technology and Electronics with Us. Discover Cutting-Edge Gadgets, Unleash Your Imagination, and Stay Connected to the Digital Revolution. Your Journey to the Future Starts Here!</p>
                    <button className="btn btn-primary">Explore Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;