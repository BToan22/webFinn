import React from "react";
import Bmo from "../assets/images/me/BMO.png";
import { motion } from "framer-motion";
import caLamTo from "../assets/images/work/caLamTo.png";
import drawToStart from "../assets/images/work/drawToStart.png";
import icon1 from "../assets/images/work/icon1.png";
import icon2 from "../assets/images/work/icon2.png";
import icon3 from "../assets/images/work/icon3.png";
import icon4 from "../assets/images/work/icon4.png";
import icon5 from "../assets/images/work/icon5.png";
import karofi from "../assets/images/work/karofi.png";
import nguoiViet from "../assets/images/work/nguoiViet.png";
import start_in_black from "../assets/images/work/start_in_black.png";

const Work = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center space-y-10 py-10"
      style={{
        backgroundImage: `url(${start_in_black})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lưới chính */}
      <div className="grid w-5/6 grid-cols-6 gap-4 lg:w-2/3">
        {/* Cột 1: Icon 2 (bên trái) */}
        <div className="col-span-1 flex flex-col items-center justify-end">
          <img src={Bmo} alt="Icon 2" className="h-16 w-auto lg:h-40" />
        </div>

        {/* Cột 2: Card chính (chiếm 4 cột) */}
        <div className="relative col-span-4 flex flex-col items-center">
          {/* Icon 1 phía trên */}
          <img src={icon1} alt="Icon 1" className="mb-4 h-16 w-auto lg:h-20" />

          {/* Card chính to hơn */}
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl lg:p-12">
            {/* Hình ảnh trong card */}
            <a href="/calamto" className="flex w-full justify-center">
              <motion.img
                src={caLamTo}
                alt="Main Image"
                className="w-full rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105"
              />
            </a>

            {/* Tiêu đề bên trong card */}
            <h2 className="mt-6 text-center text-3xl font-bold text-black lg:text-4xl">
              Cá Làm Tổ Music Event
            </h2>
          </div>
        </div>

        {/* Cột 3: Icon 3 (bên phải) */}
        <div className="col-span-1 flex flex-col items-center justify-end">
          <img src={icon2} alt="Icon 3" className="h-32 w-auto lg:h-40" />
        </div>
      </div>

      {/* Lưới 4 ảnh nhỏ bên dưới */}
      <div className="grid w-5/6 grid-cols-2 gap-6 lg:w-1/2">
        {[
          { src: nguoiViet, link: "/nguoiviet" },
          { src: karofi, link: "/traptotap" },
          { src: drawToStart, link: "/drawtostar" },
        ].map((item, index) => (
          <a key={index} href={item.link} className="w-full">
            <motion.img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="aspect-square w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
