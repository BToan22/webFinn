import React from "react";
import imagesDrawToStar from "../assets/images/drawToStar";

const DrawToStar = () => {
  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center p-6 sm:p-10"
        style={{
          backgroundImage: `url(${imagesDrawToStar.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Hình ảnh */}
          <div className="flex w-full items-center justify-center p-8 sm:w-1/2">
            <img
              src={imagesDrawToStar.banner}
              alt="Draw To Star Banner"
              className="h-auto max-w-full rounded-xl shadow-lg sm:h-[400px]"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="relative w-full p-8 pb-20 text-black sm:w-1/2 sm:pb-24">
            <p className="mt-6 text-2xl font-bold text-black">DRAW TO STARS</p>
            <p className="mt-4 text-lg sm:text-xl">Context</p>
            <p className="mt-4 text-lg sm:text-xl">
              Many people choose to come to Starbucks to work and study.
              However, Starbucks Vietnam has a low customer return rate. There
              is a need for a communication campaign to engage this group of
              customers and increase the return rate.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex min-h-screen items-center justify-center p-6 sm:p-10"
        style={{
          backgroundColor: "#3F5E4D",
        }}
      >
        <div className="relative flex w-full max-w-6xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row">
          {/* Cột trái: Nền background1 và chữ "Draw to Stars" */}
          <div
            className="flex w-full items-center justify-center p-8 sm:w-1/2"
            style={{
              backgroundImage: `url(${imagesDrawToStar.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Draw to Stars
            </h1>
          </div>

          {/* Cột phải: Nội dung */}
          <div className="relative w-full p-8 pb-20 text-black sm:w-1/2 sm:pb-24">
            <h2 className="text-2xl font-semibold">Creative Idea:</h2>
            <p className="mt-4 text-lg sm:text-xl">
              Starbucks is famous for the tradition of writing customer names on
              Starbucks cups.
            </p>
            <p className="mt-4 text-lg sm:text-xl">
              The proposed communication campaign idea allows customers to draw
              on their own paper cups.
            </p>
            <p className="mt-4 text-lg sm:text-xl">
              After stressful hours, customers can draw to relieve stress. Every
              beautifully drawn cup will be awarded a star on the Starbucks app.
            </p>
            <p className="mt-4 text-lg sm:text-xl">
              In addition, customers tend to take photos of their drawings and
              post them on social media. This will help increase the return rate
              to accumulate stars to redeem free drinks and spread the image of
              a close brand to users.
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-[#8B5E3C] p-6 sm:p-10">
        <div className="w-full max-w-6xl rounded-2xl bg-[#8B5E3C] p-8 shadow-xl">
          {/* Card 3 */}
          <div className="relative mb-10 flex w-full flex-col rounded-2xl bg-[#3F5E4D] p-8 shadow-xl">
            <div className="flex w-full justify-center py-5">
              <img
                src={imagesDrawToStar.cup1}
                alt="Cup 1"
                className="h-auto w-3/4 max-w-lg rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative flex w-full flex-col rounded-2xl bg-[#8B5E3C] p-8 shadow-xl">
            <div className="flex w-11/12 max-w-5xl flex-col items-center sm:flex-row sm:gap-6">
              <div className="flex w-full flex-col gap-6 sm:w-1/2">
                <img
                  src={imagesDrawToStar.cup2}
                  alt="status1"
                  className="w-full rounded-lg object-contain shadow-lg"
                />
              </div>
              <img
                src={imagesDrawToStar.bannerCup}
                alt="comment"
                className="mb-6 w-full rounded-lg object-cover shadow-lg sm:mb-0 sm:w-1/2"
              />
            </div>

            
          </div>
          <div className="mt-10 flex w-full items-center justify-center">
              <a href="/traptotap" className="flex w-1/3 justify-center">
                <img
                  src={imagesDrawToStar.prevPage}
                  alt="Previous Page"
                  className="h-24 w-auto cursor-pointer rounded-lg shadow-lg"
                />
              </a>
              <img
                src={imagesDrawToStar.icon}
                alt="Middle Icon"
                className="mx-6 h-16 w-auto rounded-lg shadow-md"
              />
              <a href="/" className="flex w-1/3 justify-center">
                <img
                  src={imagesDrawToStar.goMe}
                  alt="Next Page"
                  className="h-24 w-auto cursor-pointer rounded-lg shadow-lg"
                />
              </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default DrawToStar;
