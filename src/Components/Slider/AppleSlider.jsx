

const AppleSlider = () => {
    return (
        <div className="carousel md:max-h-[80vh] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9cFZJYC/apple-logo-4k-cut-out-wsn4ta21toc9swdl.webp" className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/j4m9XSg/HD-wallpaper-sony-glitter-logo-creative-bronze-metal-background-sony-logo-brands-sony.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4WKvHGS/HD-wallpaper-samsung-red-logo-red-brickwall-samsung-logo-brands-samsung-neon-logo-samsung.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
    );
};

export default AppleSlider;