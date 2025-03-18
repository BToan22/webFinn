import React, { useState, useEffect } from "react";
import imagesCaLamTo from "../assets/images/caLamTo";
import { motion } from "framer-motion";

const CaLamTo = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Banner - Full kích thước */}
      <div className="w-full">
        <img
          src={imagesCaLamTo.banner}
          alt="Cá Làm Tổ"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Nội dung chính */}
      <div className="relative mx-auto mt-10 max-w-3xl px-6">
        <h1 className="mb-6 text-center text-5xl font-bold">
          Ca lam To music event
        </h1>

        {/* Nội dung text căn trái */}
        <div className="text-left text-lg">
          <p className="mb-4">
            After Ca Hoi Hoang band announced to disband, our team has decided
            to reunite and create a small live show called "Ca lam To" as a way
            to create beautiful memories for the Ca Hoi Hoang fandom. This event
            will also provide a place for indie artists to share their unique
            musical styles with the audience.
          </p>
          <p className="mb-4">
            The name 'Ca lam To' is a combination of the fandom name of the band
            (Ca) and our team's name (To Van Cong).
          </p>
          <p className="mb-4">
            My SOW is to write content for merchandise and posts on To Van
            Cong's fanpage.
          </p>

          {/* Credits */}
          <h2 className="mt-6 text-2xl font-semibold">Credits:</h2>
          <p className="mt-2 font-semibold">Copywriter:</p>
          <p>Pham Phuc Thinh, Ms. An, Huu Tran, Thanh Trung, Thu Uyen.</p>
          <p className="font-semibold">Designer:</p>
          <p>Le Nhat Tan, Dang Hoang Lan</p>
        </div>

        {/* Icon nằm trong div nội dung - góc dưới bên phải */}
        <div className="absolute bottom-0 right-0 p-4">
          <img src={imagesCaLamTo.icon1} alt="Icon" className="w-24" />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 py-10 text-black">
        {/* Hình chính, lệch trái */}
        <div className="flex w-full justify-center py-10">
          <img
            src={imagesCaLamTo.pic2}
            alt="Merchandise"
            className="h-auto w-3/4 max-w-4xl -translate-x-5 rounded-lg shadow-md"
          />
        </div>

        {/* Hình 1 - lệch trái */}
        <div className="flex w-full justify-center py-10">
          <img
            src={imagesCaLamTo.cardholder}
            alt="Merchandise 1"
            className="h-auto w-3/4 max-w-lg -translate-x-4 rounded-lg shadow-md"
          />
        </div>

        {/* Hình 2 - lệch phải */}
        <div className="flex w-full justify-center py-10">
          <img
            src={imagesCaLamTo.lanyard}
            alt="Merchandise 2"
            className="h-auto w-3/4 max-w-lg translate-x-4 rounded-lg shadow-md"
          />
        </div>

        {/* Hình 3 - lệch trái */}
        <div className="flex w-full justify-center py-10">
          <img
            src={imagesCaLamTo.combo}
            alt="Merchandise 3"
            className="h-auto w-3/4 max-w-lg -translate-x-4 rounded-lg shadow-md"
          />
        </div>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <img
            src={imagesCaLamTo.facebookStatus}
            alt="Story 1"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
          <img
            src={imagesCaLamTo.checkin}
            alt="Story 3"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
          <img
            src={imagesCaLamTo.order}
            alt="Story 2"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-[#72B8D4] py-10">
        {/* Hàng 1: Hình lớn bên trái + Cột chứa ToVanCong & Img dưới nó */}
        <div className="flex w-11/12 max-w-5xl flex-col items-center sm:flex-row sm:gap-6">
          {/* Hình lớn bên trái */}
          <img
            src={imagesCaLamTo.team}
            alt="Group Photo"
            className="mb-6 w-full rounded-lg object-cover shadow-lg sm:mb-0 sm:w-1/2"
          />

          {/* Cột chứa Hình ToVanCong & Hình mới bên dưới */}
          <div className="flex w-full flex-col gap-6 sm:w-1/2">
            <img
              src={imagesCaLamTo.ToVanCong}
              alt="Logo"
              className="w-full rounded-lg object-contain shadow-lg"
            />
            <img
              src={imagesCaLamTo.Finn}
              alt="Extra Image"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-10 flex w-full max-w-4xl items-center justify-center gap-x-4">
          {/* 🔹 Nhóm Icon + Chữ */}
          <div className="flex items-center gap-x-1">
            <img
              src={imagesCaLamTo.icon2}
              alt="Icon"
              className="h-20 w-20 object-contain"
            />
            <p className="text-lg font-semibold italic text-white">
              Come into the house, please!
            </p>
          </div>

          {/* 🔹 Hình có thể ấn + Motion nhảy nhẹ */}
          <a href="/nguoiviet">
            <motion.img
              src={imagesCaLamTo.nextImage}
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
  );
};

export default CaLamTo;
