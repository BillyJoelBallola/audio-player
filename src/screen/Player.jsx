import { Image, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AppBar from '../components/Player/AppBar';
import { playListData } from '../contants';
import AssetImage from '../components/Reusable/AssetImage';
import HeightSpacer from '../components/Reusable/HeightSpacer';
import ControlCenter from '../components/Player/ControlCenter';
import SongInfo from '../components/Player/SongInfo';
import { SoundContext } from '../context/SoundContext';
import disk from "../assets/images/disk.png";
import { Audio } from 'expo-av';

const Player = ({ navigation }) => {
  const id = useRoute().params;
  const [songId, setSongId] = useState('');
  const { audioStatus, play, pause, unloadAudio } = useContext(SoundContext);

  useEffect(() => {
    if(id){
      setSongId(id);
    }
  }, [id]);

  useEffect(() => {
    if(songId){
      const audio = playListData?.find((item) => item.id === songId);
      const playbackObj = new Audio.Sound();
      play(audio, playbackObj);
    }
  }, [songId]);

  return (
    <View>
      <AppBar onPress={() => navigation.navigate("Home")} />
      <HeightSpacer height={80} />
      <View style={styles.imageContainer}>
        <View style={styles.centerDisk}>
          <AssetImage 
            source={audioStatus?.currentAudio?.image ? audioStatus?.currentAudio?.image : 2}
            height={110}
            width={110}
          />
        </View>
        <Image 
          source={disk ? disk : ""}
          style={{ height: 300, width: 300, position: 'absolute', left: 20 }}
        />
      </View>
      <HeightSpacer height={20}/>
      <SongInfo song={audioStatus?.currentAudio} />
      <HeightSpacer height={100}/>
      <ControlCenter pause={pause} audioStatus={audioStatus} setSongId={setSongId} songId={songId} unloadAudio={unloadAudio} />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  centerDisk: {
    width: 300,
    height: 300,
    marginHorizontal: 95,
    paddingVertical: 90,
  }
})