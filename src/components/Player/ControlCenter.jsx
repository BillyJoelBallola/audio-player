import { StyleSheet, View, TouchableOpacity } from 'react-native';
import reusable from '../Reusable/reusable.style';
import { Ionicons } from '@expo/vector-icons';
import { playListData } from '../../contants';
import { COLORS } from '../../theme';
import React from 'react';

const ControlCenter = ({ pause, audioStatus, setSongId, songId, unloadAudio }) => {
  const songsLenght = playListData?.length;

  return (
    <View style={[reusable.rowWithSpace('space-between'), { marginHorizontal: 80 }]}>
      <TouchableOpacity 
        onPress={() => {
          unloadAudio();
          setSongId(prev => prev >= 0 && prev-1);
        }}
        disabled={songId <= 1}
      >
        <Ionicons 
          name='play-back'
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.playButton}
        onPress={pause} 
      >
        <Ionicons 
          name={audioStatus?.soundObj?.isPlaying ? 'pause' : 'play'}
          size={50}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          unloadAudio();
          setSongId(prev => prev+1);
        }}
        disabled={songId >= songsLenght}
      >
        <Ionicons 
          name='play-forward'
          size={30}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ControlCenter;

const styles = StyleSheet.create({
  playButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: COLORS.white
  }
});