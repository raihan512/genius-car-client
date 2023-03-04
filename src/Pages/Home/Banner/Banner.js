import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 top-2/4 left-5">
          <h3 className="text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
        </div>
        <div className="absolute flex justify-end transform w-2/5 -translate-y-1/2 top-3/4 left-5">
          <p className="text-white text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-2/4 top-3/4 left-5 mt-20">
          <button className="btn btn-warning mr-5 rounded-none">Warning</button>
          <button className="btn btn-warning btn-outline rounded-none">
            Warning
          </button>
        </div>
        <div className="absolute flex justify-end transform right-5 bottom-2">
          <a href="#slide4" className="btn rounded-none mr-2 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn rounded-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="" />
        <div className="absolute flex justify-end transform right-5 bottom-2">
          <a href="#slide1" className="btn rounded-none mr-2 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn rounded-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt="" />
        <div className="absolute flex justify-end transform right-5 bottom-2">
          <a href="#slide2" className="btn rounded-none mr-2 text-white">
            ❮
          </a>
          <a href="#slide4" className="btn rounded-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="" />
        <div className="absolute flex justify-end transform right-5 bottom-2">
          <a href="#slide3" className="btn rounded-none mr-2 text-white">
            ❮
          </a>
          <a href="#slide1" className="btn rounded-none text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
