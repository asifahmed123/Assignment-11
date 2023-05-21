import React from 'react';

const Banner = () => {
     return (
          <div className="carousel w-full">
               <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://opencart.mahardhi.com/MT03/kiddle/image/cache/catalog/banners/mainbanner1-1920x750.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide2" className="btn btn-circle">❮</a>
                         <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://opencart.mahardhi.com/MT03/kiddle/image/cache/catalog/banners/mainbanner2-1920x750.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide1" className="btn btn-circle">❮</a>
                         <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
               </div>
               
          </div>
     );
};

export default Banner;