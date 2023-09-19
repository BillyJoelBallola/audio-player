import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AssetImage from './AssetImage';
import ReusableText from './ReusableText';
import { COLORS, TEXT } from '../../theme';
import React from 'react';
import HeightSpacer from './HeightSpacer';

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AssetImage 
        source={item.image}
        height={200}
        width={200}
      />
      <HeightSpacer height={10} />
      <View style={styles.text}>
        <ReusableText
          text={item.title}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
          align={'center'}
        />
        <ReusableText
          text={"Cover"}
          family={'medium'}
          size={TEXT.small}
          color={COLORS.lightGrey}
          align={'center'}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 20
  }
});