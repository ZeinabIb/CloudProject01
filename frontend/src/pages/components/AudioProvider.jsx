import React, { useEffect, useRef, useState } from "react";
import interstellar from "../../assets/interstellar.mp3";
import { Icon } from "@mdi/react";
import { mdiVolumeMute, mdiVolumeHigh } from "@mdi/js";
const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    const storedAudioState = localStorage.getItem("isAudioPlaying");

    if (storedAudioState === "true") {
      audio.play();
      setIsMuted(false);
    }

    return () => {
      // Cleanup when the component is unmounted
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleToggleAudio = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      fadeAudioIn(audio);
      setIsMuted(false);
      localStorage.setItem("isAudioPlaying", "true");
    } else {
      fadeAudioOut(audio);
      setIsMuted(true);
      localStorage.setItem("isAudioPlaying", "false");
    }
  };

  const fadeAudioIn = (audio) => {
    const fadeInterval = setInterval(() => {
      if (audio.volume < 0.9) {
        audio.volume = Math.min(0.9, audio.volume + 0.1);
      } else {
        clearInterval(fadeInterval);
        audio.play();
      }
    }, 200);
  };

  const fadeAudioOut = (audio) => {
    const fadeInterval = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.1);
      } else {
        clearInterval(fadeInterval);
        audio.pause();
      }
    }, 300);
  };

  return (
    <>
      <audio ref={audioRef} controls style={{ display: "none" }}>
        <source src={interstellar} type="audio/mp3" />
      </audio>
      {children({ handleToggleAudio, isMuted })}
      <button style={styles.audioButton} onClick={handleToggleAudio}>
        {isMuted ? (
          <Icon path={mdiVolumeMute} size={1} color="white" />
        ) : (
          <Icon path={mdiVolumeHigh} size={1} color="white" />
        )}
      </button>
    </>
  );
};
const styles = {
  audioButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
};
export default AudioProvider;
