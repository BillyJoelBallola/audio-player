import { View } from 'react-native';
import ReusableText from '../components/Reusable/ReusableText';
import HeightSpacer from '../components/Reusable/HeightSpacer';
import PlayingSong from '../components/Song/PlayingSong';
import { SoundContext } from '../context/SoundContext';
import AssetImage from '../components/Reusable/AssetImage';
import SongList from '../components/Song/SongList';
import { playListData } from '../contants';
import { COLORS, TEXT } from '../theme';
import React, { useContext } from 'react';

const PlayList = () => {
  const { audioStatus, pause } = useContext(SoundContext);

  return (
    <View style={{ paddingTop: 60, height: '100%' }}>
       <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
        <AssetImage
          source={6}
          height={150}
          width={350}
          radius={20}
        />
      </View>
      <HeightSpacer height={25} />
      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Playlist"}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>
      <HeightSpacer height={20} />
      <SongList data={playListData} />
      <HeightSpacer height={audioStatus.playbackObj ? 190 : 100} />
      { audioStatus.playbackObj && <PlayingSong audioStatus={audioStatus} pause={pause} /> }
    </View>
  )
}

export default PlayList;