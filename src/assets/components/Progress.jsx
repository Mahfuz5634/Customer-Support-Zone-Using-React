import React from "react";
import photo1 from "../img/vector1.png";
import photo2 from "../img/vector3.png";

const Progress = ({card,res}) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="py-15 container gap-5 mx-auto md:flex  justify-center item-center">
        <div
          className="bg-[#8539d1]  bg-no-repeat flex flex-col justify-center items-center rounded-2xl md:w-[650px] md:h-[220px]"
          style={{
            backgroundImage: `url(${photo1}), url(${photo2}),linear-gradient(to right, #7039e6, #995df1)`,

            backgroundPosition: "left center, right center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <h1 className="text-white md:text-3xl font-bold">In-Progress</h1>
          <p className="md:text-2xl text-white font-semibold">{card.length}</p>
        </div>
        <div
          className="bg-[#1f9e74] flex flex-col justify-center items-center rounded-2xl  md:w-[650px] md:h-[220px]"
          style={{
            backgroundImage: `url(${photo1}), url(${photo2}),linear-gradient(to right, #54cf67, #30ae70)`,

            backgroundPosition: "left center, right center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <h1 className="text-white md:text-3xl font-bold">Resolved</h1>
          <p className="md:text-2xl text-white font-semibold">{res.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
