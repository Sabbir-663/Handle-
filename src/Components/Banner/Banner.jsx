import React from "react";
import bannerImg from "../../assets/images/banner.jpg";
import Cards from "../Cards/Cards";
const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538E2] h-[500px] rounded-b-xl">
        <div className="hero   text-white">
          <div className=" flex-col relative hero-content">
            <div className="text-center">
              <h1 className="text-5xl font-bold">
                Upgrade Your Tech Accessorize with
                <br /> Gadget Heaven Accessories
              </h1>
              <p className="py-5">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to <br />
                the coolest accessories, we have it all!
              </p>
              <button className="btn btn-white text-[#9538e2e7] font-bold rounded-full">
                Shop Now
              </button>
            </div>
            <div className=" absolute border-2 p-3 rounded-xl top-80 border-white">
              <img
                src={bannerImg}
                className="rounded-lg shadow-2xl  w-[1000px] h-96"
              />
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Banner;
