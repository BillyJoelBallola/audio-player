import React, { createContext, useState } from 'react';

export const SoundContext = createContext({});

export const SoundContextProvider = ({ children }) => {  
  const [audioStatus, setAudioStatus] = useState({
    playbackObj: null,
    soundObj: null,
    currentAudio: null,
  });

  const unloadAudio = async () => {
    audioStatus?.playbackObj?.unloadAsync();
    setAudioStatus({
      playbackObj: null,
      soundObj: null,
      currentAudio: null,
    })
  }

  const play = async (audio, playbackObj) => {
    if (audioStatus?.soundObj === null) {
      const status = await playbackObj.loadAsync(
        { uri: audio.url },
        { shouldPlay: true }
      );
      return setAudioStatus((prev) => ({
        ...prev,
        currentAudio: audio,
        playbackObj: playbackObj,
        soundObj: status,
      }));
    }
  };
const pause = async () => {
    if (audioStatus?.soundObj !== null) {
      if (audioStatus?.soundObj?.isLoaded && audioStatus?.soundObj?.isPlaying) {
        const status = await audioStatus.playbackObj.pauseAsync();
        return setAudioStatus((prev) => ({
          ...prev,
          soundObj: status,
        }));
      }
  
      if (audioStatus?.soundObj?.isLoaded && !audioStatus?.soundObj?.isPlaying) {
        const status = await audioStatus.playbackObj.playAsync();
        return setAudioStatus((prev) => ({
          ...prev,
          soundObj: status,
        }));
      }
    }
  };

  return (
    <SoundContext.Provider value={{ audioStatus, setAudioStatus, unloadAudio, play, pause }}>
      {children}
    </SoundContext.Provider>
  )
}