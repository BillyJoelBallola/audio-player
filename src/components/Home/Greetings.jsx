import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, TEXT } from '../../theme';
import WidthSpacer from '../Reusable/WidthSpacer';
import AssetImage from '../Reusable/AssetImage';
import { Ionicons } from '@expo/vector-icons';

const Greetings = () => {
  return (
    <View style={[reusable.rowWithSpace('flex-start'), styles.greetContainer]}>
      <AssetImage 
        source={1}
        width={60}
        height={60}
        radius= {60/2}
      />
      <WidthSpacer width={20} />
      <View style={styles.greetText}>
        <Ionicons 
          name='caret-back'
          size={30}
          color={COLORS.white}
          style={styles.arrow}
        />
        <ReusableText 
          text={"Hello Baby! 👋"}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>
    </View>
  )
}

export default Greetings;

const styles = StyleSheet.create({
  greetContainer: {
    marginHorizontal: 20, 
    marginTop: 70
  },
  greetText: {
    width: '75%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
  },
  arrow: {
    position: 'absolute',
    alignContent: 'center',
    left: -20,
    top: 5
  }
});