import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import reusable from '../components/Reusable/reusable.style';
import ReusableText from '../components/Reusable/ReusableText';
import HeightSpacer from '../components/Reusable/HeightSpacer';
import AssetImage from '../components/Reusable/AssetImage';
import { SoundContext } from '../context/SoundContext';
import PlayingSong from '../components/Song/PlayingSong';
import Greetings from '../components/Home/Greetings';
import SongList from '../components/Song/SongList';
import { COLORS, TEXT } from '../theme';
import React, { useContext } from 'react';
import SongHorizontalList from '../components/Song/SongHorizontalList';

const Home = ({ navigation }) => {
  const { audioStatus, pause } = useContext(SoundContext);

  const playListData = [
    {
      id: 1,
      title: "1251",
      image: 2,
      author: 'Cover'
    },
    {
      id: 2,
      title: "Angel Baby",
      image: 2,
      author: 'Cover'
    },
    {
      id: 3,
      title: "Huling Sandali",
      image: 2,
      author: 'Cover'
    }
  ]

  return (
    <SafeAreaView style={[reusable.container]}>
      {/* <Greetings /> */}
      <HeightSpacer height={60} />
      <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
        <AssetImage 
          source={5}
          height={150}
          width={350}
          radius={20}
        />
      </View>
      <HeightSpacer height={20} />
      <View style={[{ marginHorizontal: 20 }, reusable.rowWithSpace("space-between")]}>
        <ReusableText
          text={"Listen Now"}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("PlayList")}>
          <ReusableText
            text={"view all"}
            family={'regular'}
            size={TEXT.small}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>
      <HeightSpacer height={20} />
      {/* <SongList data={playListData} /> */}
      <SongHorizontalList data={playListData}/>
      <HeightSpacer height={audioStatus.playbackObj ? 190 : 100} />
      { audioStatus.playbackObj && <PlayingSong audioStatus={audioStatus} pause={pause} /> }
    </SafeAreaView>
  )
}

export default Home;