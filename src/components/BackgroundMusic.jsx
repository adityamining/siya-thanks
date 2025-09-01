"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        console.log("🎵 Music is playing automatically");
      } catch (err) {
        console.log("⛔ Autoplay blocked, waiting for user interaction");
        // Fallback: play on first click anywhere
        const handleClick = () => {
          audio.play();
          document.removeEventListener("click", handleClick);
        };
        document.addEventListener("click", handleClick);
      }
    };

    playAudio();
  }, []);

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} src="/song.mp3" loop autoPlay hidden />

      {/* Manual Button (if you still want a visible button) */}
      <button
        onClick={() => audioRef.current?.play()}
        className="fixed bottom-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        🎶 Play Music
      </button>
    </>
  );
}
