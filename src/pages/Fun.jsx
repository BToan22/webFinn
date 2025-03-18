import React, { useRef, useEffect, useState } from "react";
import profileImage from "../assets/images/fun/profile.png";
import marcelineImage from "../assets/images/fun/marceline.png";
import titok from "../assets/images/fun/Tiktok.png";
import story1 from "../assets/images/fun/story1.png";
import story2 from "../assets/images/fun/story2.png";
import story3 from "../assets/images/fun/story3.png";
import honey from "../assets/audio/honey_pie.mp3";

import {
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const Fun = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleCanPlay = () => console.log("🎵 Audio is ready to play!");
      audio.addEventListener("canplay", handleCanPlay);
      return () => audio.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Nếu chưa sẵn sàng, đợi nó load xong
    if (audio.readyState < 2) {
      console.warn("⏳ Waiting for audio to load...");
      await new Promise((resolve) =>
        audio.addEventListener("canplay", resolve, { once: true }),
      );
      console.log("🎵 Audio is ready now!");
    }

    // Phát hoặc tạm dừng
    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col bg-white text-black">
      {/* Profile Finn */}
      <div className="flex min-h-screen items-center justify-center bg-yellow-400 p-4 md:p-10">
        <div className="relative flex w-full max-w-5xl flex-wrap overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-nowrap">
          <div className="flex w-full items-center justify-center p-4 md:w-1/3 md:p-6">
            <img
              src={profileImage}
              alt="Finn"
              className="w-40 rounded-lg shadow-lg md:w-full"
            />
          </div>
          {/* Play/Pause */}
          <div className="absolute right-3 top-3 md:right-5 md:top-5">
            {/* <button
              onClick={togglePlay}
              className="pointer-events-auto mb-4 cursor-pointer rounded-full bg-gray-800 p-4 text-white shadow-lg"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button> */}

            {/* <iframe
              id="youtubeAudio"
              src="https://www.youtube.com/embed/Wgw6tJ8yz9M?enablejsapi=1&autoplay=1&start=20&controls=0&loop=1&playlist=Wgw6tJ8yz9M"
              allow="autoplay"
              style={{ display: "none" }}
            ></iframe> */}
            <audio src={honey} preload="auto" />
          </div>

          <div className="relative flex w-full flex-col items-center justify-center p-6 md:w-2/3 md:items-start md:p-12">
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl">
              Finn
            </h1>
            <p className="mt-4 text-center text-sm md:text-left md:text-lg">
              Finn is the artistic expression of my soul, a name that
              encapsulates my musical creations and my inner child.
            </p>
            <p className="mt-2 text-center text-sm md:text-left md:text-lg">
              Finn represents a spirit of perpetual optimism and cheerfulness.
            </p>
            <p className="mt-4 text-center text-sm md:text-left md:text-lg">
              Step into Finn's musical universe ^^
            </p>
            <div className="mt-6 flex space-x-4 text-xl md:text-2xl">
              <a
                href="https://www.tiktok.com/@finn_1509"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="cursor-pointer hover:text-gray-600" />
              </a>
              <a
                href="https://www.facebook.com/thuu.uyen.35/?locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/uyen-thu-a2a910312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
              </a>
              <a
                href="https://www.instagram.com/finn_1509/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-gray-600" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 md:bottom-5 md:left-[calc(100%-120px)] md:right-10 md:right-auto">
            <img
              src={marcelineImage}
              alt="Marceline"
              className="w-16 md:w-40"
            />
          </div>
        </div>
      </div>

      {/* Phần Video Embed - Nền Đen */}
      <div className="flex flex-col items-center bg-black p-4 text-white md:p-10">
        <div className="flex w-full max-w-5xl flex-col rounded-2xl bg-gray-800 shadow-2xl md:flex-row">
          <div className="flex w-full justify-center p-4 md:w-1/2 md:p-6">
            <iframe
              className="h-[200px] w-full rounded-lg md:h-[400px] md:w-[700px]"
              src="https://www.youtube.com/embed/iUoBa_8oSQo"
              title="Xuân Hạ Thu Đông - Thu Uyên"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex w-full flex-col justify-center p-4 md:w-1/2 md:p-12">
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              This is my first song.
            </h2>
            <p className="mt-4 text-base text-white md:text-xl">
              Its name is <strong>Xuan Ha Thu Dong</strong>.
            </p>
            <p className="mt-4 text-base text-white md:text-xl">
              Instead of <em>"Eternal love"</em>, Finn says <br />
              <strong>"I love you through all four seasons"</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Video Embed 2 - Nền Vàng */}
      <div className="flex flex-col items-center bg-yellow-400 p-4 text-black md:p-10">
        <div className="flex w-full max-w-5xl flex-col rounded-2xl bg-white shadow-2xl md:flex-row">
          <div className="flex w-full justify-center p-4 md:w-1/2 md:p-6">
            <iframe
              className="h-[200px] w-full rounded-lg md:h-[400px] md:w-[700px]"
              src="https://www.youtube.com/embed/uLjzMskLEpI"
              title="12h Em Dậy Chưa - Uynnn"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex w-full flex-col justify-center p-4 md:w-1/2 md:p-12">
            <h2 className="text-2xl font-semibold text-black md:text-4xl">
              My second song, <br></br>'Are you awake at 12?'
            </h2>
            <p className="mt-4 text-base text-black md:text-xl">
              Came from a really cute situation: my roommate loves to sleep in
              until noon.
            </p>
            <p className="mt-4 text-base text-black md:text-xl">
              That moment inspired me to write. I realized that true love is
              loving someone for even their small habits, even if they're a
              little lazy.
            </p>
          </div>
        </div>
      </div>

      {/* TikTok Section */}
      <div className="flex flex-col items-center bg-black p-4 text-white md:p-10">
        <div className="flex w-full max-w-5xl flex-col rounded-2xl bg-white text-black shadow-2xl md:flex-row">
          <div className="flex w-full justify-center p-4 md:w-1/2 md:p-6">
            <img
              src={titok}
              alt="TikTok Profile"
              className="h-[200px] w-full rounded-lg object-cover shadow-lg md:h-[400px] md:w-[700px]"
            />
          </div>
          <div className="flex w-full flex-col justify-center p-4 md:w-1/2 md:p-12">
            <h2 className="text-2xl font-semibold md:text-4xl">
              I also have a small TikTok channel for my music...
            </h2>
            <p className="mt-4 text-base md:text-xl">
              I used to have a really big problem with making videos because my
              face was asymmetrical. But I chose TikTok to face that fear and I
              overcame it. I'm so proud of myself for that, even though the
              journey wasn't easy!
            </p>
          </div>
        </div>
      </div>

      {/* 3 Story */}
      <div className="flex flex-col items-center bg-yellow-400 p-4 md:p-10">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <img
            src={story1}
            alt="Story 1"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
          <img
            src={story3}
            alt="Story 3"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
          <img
            src={story2}
            alt="Story 2"
            className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Fun;
