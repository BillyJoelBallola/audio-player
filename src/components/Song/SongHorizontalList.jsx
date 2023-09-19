import { FlatList, StyleSheet, View } from 'react-native';
import ReusableTile from '../Reusable/ReusableTile';
import { useNavigation } from '@react-navigation/native';
import { SoundContext } from '../../context/SoundContext';
import React, { useContext } from 'react';

const SongHorizontalList = ({ data }) => {
  const navigation = useNavigation();
  const { audioStatus, unloadAudio } = useContext(SoundContext);

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}  
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ marginHorizontal: 20 }}
      renderItem={({ item }) => (
        <View style={{ marginHorizontal: 10 }}>
          <ReusableTile 
            item={item} 
            onPress={() => {
              navigation.navigate("Player", item.id);
              if(audioStatus?.soundObj) unloadAudio();
            }}
          />
        </View>
      )}
    />
  )
}

export default SongHorizontalList;

const styles = StyleSheet.create({});