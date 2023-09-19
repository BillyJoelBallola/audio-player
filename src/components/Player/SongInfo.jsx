import { StyleSheet, View } from 'react-native';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, TEXT } from '../../theme';
import React from 'react';

const SongInfo = ({ song }) => {
  return (
    <View style={styles.container}>
      <View>
        <ReusableText 
          text={song?.title ? song.title : 'Loading...'}
          family={'bold'}
          size={TEXT.large}
          color={COLORS.black}
          align={'center'}
        />
      </View>
    </View>
  )
}

export default SongInfo;

const styles = StyleSheet.create({});