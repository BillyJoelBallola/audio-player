import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AssetImage from '../Reusable/AssetImage';
import disk from "../../assets/images/disk.png";
import reusable from '../Reusable/reusable.style';
import { Ionicons } from '@expo/vector-icons';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, TEXT } from '../../theme';
import React from 'react';

const PlayingSong = ({ audioStatus, pause }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={reusable.rowWithSpace('space-between')} onPress={() => navigation.navigate("Player", audioStatus.currentAudio.id)}>
        <View style={reusable.rowWithSpace('flex-start')}>
          <View style={styles.imageContainer}>
            <View style={styles.centerDisk}>
              <AssetImage 
                source={audioStatus?.currentAudio?.image ? audioStatus?.currentAudio?.image : 2}
                height={23}
                width={23}
              />
            </View>
            <Image 
              source={disk ? disk : ""}
              style={{ height: 60, width: 60, position: 'absolute', left: 20 }}
            />
          </View>
          <View style={{ marginLeft: 90 }}>
            <ReusableText
              text={audioStatus?.currentAudio?.title}
              family={'medium'}
              size={TEXT.small}
              color={COLORS.black}
            />
            <ReusableText
              text={audioStatus?.soundObj?.isPlaying ? "Playing" : "Pause"}
              family={'regular'}
              size={TEXT.xSmall}
              color={COLORS.gray}
            />
          </View>
        </View>
        <TouchableOpacity 
          onPress={pause}
        >
          <Ionicons 
            name={audioStatus?.soundObj?.isPlaying ? 'pause' : 'play' }
            size={30}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default PlayingSong

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    height: 180,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
    paddingVertical: 20,
    paddingRight: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  centerDisk: {
    position: 'absolute',
    left: 38,
  }
})