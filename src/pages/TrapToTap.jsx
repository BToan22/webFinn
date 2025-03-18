import React from "react";
import imagesTrapToTap from "../assets/images/trapToTap";
import { motion } from "framer-motion";

const TrapToTap = () => {
  return (
    <>
      {/* PHẦN 1: Background 1 */}
      <div
        className="flex min-h-screen items-center justify-center p-6 sm:p-10"
        style={{
          backgroundImage: `url(${imagesTrapToTap.background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Hình ảnh */}
          <div className="flex w-full items-center justify-center p-8 sm:w-1/2">
            <img
              src={imagesTrapToTap.banner}
              alt="Trap to Tap"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="relative w-full p-8 pb-20 text-black sm:w-1/2 sm:pb-24">
            <h1 className="text-3xl font-bold sm:text-5xl">From Trap to Táp</h1>
            <br />
            <p className="text-lg sm:text-xl">
              Oggy and the cockroaches is a childhood memory for many people. It
              is known that Oggy is always bullied by the cockroaches.
            </p>
            <br />
            <p className="text-lg sm:text-xl">
              Today Oggy will pretend to set a trap to make the cockroaches lose
              their focus and attack each other. Use a short comic strip to
              advertise the Karofi water purifier.
            </p>
          </div>
        </div>
      </div>

      {/* PHẦN 2: Background 2 + Card xanh rêu sáng */}
      <div
        className="flex min-h-screen items-center justify-center p-10"
        style={{
          backgroundImage: `url(${imagesTrapToTap.background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-[#3F5E4D] p-8 shadow-xl">
          {/* Hình 1 */}
          <div className="flex w-full justify-center py-5">
            <img
              src={imagesTrapToTap.tus1}
              alt="Trap to Tap 1"
              className="h-auto w-3/4 max-w-lg -translate-x-6 rounded-lg shadow-md"
            />
          </div>

          {/* Hình 2 + Icon */}
          <div className="relative flex w-full items-center justify-center py-5">
            {/* Icon bên cạnh Hình 2, nhỏ đi 1/2 */}
            <img
              src={imagesTrapToTap.icon1}
              alt="Icon"
              className="w-1/4 max-w-lg translate-x-6 rounded-lg shadow-md"
            />
            {/* Hình 2 */}
            <img
              src={imagesTrapToTap.tus2}
              alt="Trap to Tap 2"
              className="h-auto w-3/4 max-w-lg translate-x-6 rounded-lg shadow-md"
            />
          </div>

          {/* Điều hướng trang trong phần nền */}
          <div className="mt-10 flex w-full items-center justify-center">
            {/* Cột 1 - Về trang trước */}
            <a href="/nguoiviet" className="flex w-1/3 justify-center">
              <motion.img
                src={imagesTrapToTap.prevPage}
                alt="Previous Page"
                className="h-24 w-auto cursor-pointer rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </a>

            {/* Cột 3 - Về trang kế tiếp */}
            <a href="/drawtostar" className="flex w-1/3 justify-center">
              <motion.img
                src={imagesTrapToTap.nextPage}
                alt="Next Page"
                className="h-24 w-auto cursor-pointer rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrapToTap;
