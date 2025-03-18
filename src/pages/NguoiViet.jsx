import React from "react";
import imagesNguoiViet from "../assets/images/nguoiViet";
import { motion } from "framer-motion";

const NguoiViet = () => {
  return (
    <div className="bg-red-700">
      {/* CARD 1 */}
      <div className="flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Hình ảnh */}
          <div className="flex w-full items-center justify-center bg-[#20382D] p-8 sm:w-1/2">
            <img
              src={imagesNguoiViet.banner}
              alt="Nguoi Viet"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="relative w-full p-8 pb-20 text-black sm:w-1/2 sm:pb-24">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Vietnamese people study Vietnamese
            </h1>
            <br />
            <p className="text-lg sm:text-xl">
              <strong>Challenge:</strong> Proverbs and folk songs are a valuable
              treasure trove of Vietnamese culture, yet many young people today
              are unfamiliar with them or only have a partial understanding due
              to the presence of many Sino-Vietnamese words.
            </p>
            <br />
            <p className="text-lg sm:text-xl">
              <strong>Idea:</strong> Dolphin (also me) aims to be a company to a
              brand that will bring these timeless sayings from previous
              generations to the younger generation. This advertising campaign
              collaborates with various brands, each proverb carrying a theme
              closely related to the brand.
            </p>
            <br />
            <p className="text-lg sm:text-xl">
              <strong>Communication objectives:</strong> Creating closer
              connections between foreign brands and Vietnamese people.
            </p>

            {/* Icon căn chỉnh đẹp hơn */}
            <div className="mt-6 flex justify-end">
              <img
                src={imagesNguoiViet.icon1}
                alt="Icon"
                className="h-24 w-24 sm:h-32 sm:w-32"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2 (Cùng kích thước với Card 1) */}
      <div className="flex min-h-screen items-center justify-center bg-[#20382D] p-6 sm:p-10">
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Nội dung */}
          <div className="relative w-full p-8 text-black sm:w-1/2">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <p className="mt-2 text-lg sm:text-xl">
              Dolphin's collaboration with CGV to screen a long-forgotten
              Vietnamese love proverb serves as a reminder for couples that love
              requires constant nurturing.
            </p>
          </div>

          {/* Cột phải: Hình ảnh */}
          <div className="flex w-full items-center justify-center sm:w-1/2">
            <img
              src={imagesNguoiViet.cgv}
              alt="CGV Collaboration"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Hình ảnh */}
          <div className="flex w-full items-center justify-center bg-[#20382D] p-8 sm:w-1/2">
            <img
              src={imagesNguoiViet.mc}
              alt="McDonald's Collaboration"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="relative w-full p-8 pb-20 text-black sm:w-1/2 sm:pb-24">
            <p className="mt-4 text-lg sm:text-xl">
              My brand, Dolphin, will be collaborating with McDonald's to
              promote the Vietnamese proverb:
            </p>
            <p className="mt-6 text-center text-2xl font-semibold italic text-gray-800">
              "Ăn có giờ, làm có buổi"
            </p>
            <p className="mt-4 text-lg sm:text-xl">
              This partnership aims to bring the iconic fried chicken brand
              closer to Vietnamese consumers while reminding everyone to eat
              properly, in a designated place, and to have a work-life balance.
              It's about encouraging people to work efficiently and avoid
              burnout by scheduling their time effectively.
            </p>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="flex min-h-screen items-center justify-center bg-[#20382D] p-6 sm:p-10">
        
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Nội dung */}
          <div className="relative w-full p-8 text-black sm:w-1/2">
          <br></br>
          <br></br>
          <br></br>
            <p className="mt-2 text-lg sm:text-xl">
              By collaborating with Vietjet Air, Dolphin aims to enrich
              passengers' travel experiences by sharing local proverbs about
              their destinations. ​
            </p>
            <p className="mt-2 text-lg sm:text-xl">
              For example, travelers to Bac Kan can discover the beauty of Ba Be
              Lake through a traditional saying.
            </p>
          </div>

          {/* Cột phải: Hình ảnh */}
          <div className="flex w-full items-center justify-center sm:w-1/2">
            <img
              src={imagesNguoiViet.ticket}
              alt="CGV Collaboration"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>
        </div>
      </div>
      {/* end */}
      <div className="flex w-full flex-col items-center bg-red-700 py-10">
        {/* Vùng hiển thị Social Post */}
        <h2 className="mb-6 text-2xl font-bold text-white">Social Post</h2>
        <div className="flex w-11/12 max-w-5xl flex-col items-center sm:flex-row sm:gap-6">
          {/* Cột 1 - Status Post */}
          <div className="flex w-full flex-col gap-6 sm:w-1/2">
            <img
              src={imagesNguoiViet.status1}
              alt="status1"
              className="w-full rounded-lg object-contain shadow-lg"
            />
            <img
              src={imagesNguoiViet.status2}
              alt="status2"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Cột 2 - Threads (bình luận) */}
          <img
            src={imagesNguoiViet.comment}
            alt="comment"
            className="mb-6 w-full rounded-lg object-cover shadow-lg sm:mb-0 sm:w-1/2"
          />
        </div>

        {/* Vùng điều hướng (3 cột) */}
        <div className="mt-10 flex w-full max-w-4xl items-center justify-between">
          {/* Cột 1 - Về trang trước */}
          <a href="/calamto" className="flex w-1/3 justify-center">
            <motion.img
              src={imagesNguoiViet.prevPage}
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

          {/* Cột 2 - Nội dung chữ + icon */}
          <div className="flex w-1/3 flex-col items-center text-center text-white">
            <img
              src={imagesNguoiViet.icon2}
              alt="Icon"
              className="mb-2 h-24 w-24 object-contain" // Tăng kích thước icon
            />
            <p className="text-lg font-semibold italic">
              My dear, <br />
              turn right to go on, <br />
              turn left to return ^^
            </p>
          </div>

          {/* Cột 3 - Về trang kế tiếp */}
          <a href="/traptotap" className="flex w-1/3 justify-center">
            <motion.img
              src={imagesNguoiViet.nextPage}
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

export default NguoiViet;
