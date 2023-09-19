import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SoundContext } from '../../context/SoundContext';
import SongTile from './SongTile';
import React, { useContext } from 'react';

const SongList = ({ data }) => {
  const navigation = useNavigation();
  const { unloadAudio, audioStatus } = useContext(SoundContext);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}  
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <SongTile 
            song={item} 
            onPress={() => {
              navigation.navigate("Player", item.id);
              if(audioStatus?.soundObj) unloadAudio();
            }} />
        </View>
      )}
    />
  )
}

export default SongList;