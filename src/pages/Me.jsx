import React from "react";
import imageFinn from "../assets/images/me/image_finn.png";
import Bmo from "../assets/images/me/BMO.png";
import finnJake from "../assets/images/me/finn_and_jake.png";
import treeHouse from "../assets/images/me/tree_house.png";
import thanksWall from "../assets/images/me/thanks_wall.png";
import { motion } from "framer-motion";
import cvImage from "../assets/images/me/CV.png";
import snowMan from "../assets/images/me/snow_man.png";

const Me = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-left text-3xl font-bold tracking-wide">
          LE THI THU UYEN | COPYWRITER INTERN
        </h1>

        <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
          <div className="flex justify-center md:w-1/2">
            <img
              src={imageFinn}
              alt="Profile"
              className="h-80 w-80 rounded-full border-4 border-gray-700 shadow-lg md:h-96 md:w-96"
            />
          </div>

          <div className="flex flex-col items-center px-6 md:w-1/2 md:items-start">
            <p className="font-semibold">Dear Explorers,</p>
            <p>Prepare your backpacks for adventure at:</p>

            <p className="my-3 self-start pl-12 text-xl font-bold italic text-yellow-400">
              "POR TEE FOLIO"
            </p>

            <p>
              I'm <span className="font-bold text-yellow-400">Thu Uyen</span>, a
              lover of words and advertising. To prove it, I hope we can meet.
            </p>
            <p className="mt-4">
              The purpose of this journey is to land my dream job that I've been
              pursuing for the past{" "}
              <span className="font-bold text-yellow-400">two years</span> and
              help me confidently say 'Yes' to the question{" "}
              <span className="italic">"Do you have a job yet?"</span> from my
              neighbors.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end space-x-6 pr-20">
        <motion.img
          src={Bmo}
          alt="Image 1"
          className="h-20 w-auto"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />

        <motion.img
          src={finnJake}
          alt="Image 2"
          className="h-40 w-auto"
          animate={{
            rotate: [0, 3, -3, 0],
            y: [0, -3, 0, 3, 0],
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <img src={treeHouse} alt="Image 3" className="h-60 w-auto" />
      </div>

      <div className="mt-5 h-0.5 w-full bg-white"></div>
      <div className="mt-10 flex items-center justify-center space-x-6">
        <img src={finnJake} alt="Left Image" className="w-1/6 max-w-xs" />

        <img
          src={cvImage}
          alt="CV"
          className="w-3/4 max-w-3xl rounded-lg shadow-lg"
        />

        <img src={snowMan} alt="Right Image" className="w-1/6 max-w-xs" />
      </div>
      <div className="mt-10 flex items-center justify-center space-x-6">
        <img
          src={thanksWall}
          alt="thanks"
          className="w-3/4 max-w-3xl rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Me;
