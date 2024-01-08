"use client";
import Album from "@/modules/album";
import Banner from "@/modules/banner";
import Countdown from "@/modules/countdown";
import Events from "@/modules/events";
import Form from "@/modules/form";
import Map from "@/modules/map";
import QrCode from "@/modules/prcode";
import Stories from "@/modules/stories";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<any>(null);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
      intervalRef.current = setInterval(createHeart, 100);
    } else {
      audioRef?.current?.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying, audioRef]);

  const createHeart = () => {
    const heart = document.createElement("img");
    heart.src = "https://pngimg.com/uploads/heart/heart_PNG51335.png";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s ";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  };

  useEffect(() => {
    if (intervalRef.current) {
      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, []);

  return (
    <main className="w-screen h-screen bg-white overflow-x-hidden font-questrial text-black">
      <div className="fixed bottom-10 left-2">
        <audio controls ref={audioRef} className="sr-only" loop autoPlay>
          <source src="/audio/Beautiful-In-White-Shayne-Ward-Shayne-Ward.mp3" type="audio/mpeg" />
        </audio>
        <button className="p-2 bg-red-500 rounded-full" onClick={togglePlayPause}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="5" width="4" height="14" rx="1" fill="#ffffff" />
              <rect x="14" y="5" width="4" height="14" rx="1" fill="#ffffff" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.1378 10.5689L9.60498 7.30249C8.40816 6.70408 7 7.57437 7 8.91246V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1586 16.1378 10.5689Z"
                fill="#ffffff"
              />
            </svg>
          )}
        </button>
      </div>
      <Banner />
      <Countdown />s
      <Stories />
      <Events />
      {/* <Form /> */}
      <Album />
      <Map />
      <QrCode />
    </main>
  );
}
