import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReusableText from '../components/Reusable/ReusableText';
import reusable from '../components/Reusable/reusable.style';
import HeightSpacer from '../components/Reusable/HeightSpacer';
import AssetImage from '../components/Reusable/AssetImage';
import { COLORS, SIZES, TEXT } from '../theme';
import React from 'react';

const Onboarding = ({ navigation }) => {
  return (
    <View style={reusable.container}>
      <View style={styles.imageContainer}>
        <AssetImage 
          source={3}
          height={500}
          width={'90%'}
          radius={SIZES.xLarge}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ReusableText 
          text={"Song Cover Playlist"}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />
        <ReusableText 
          text={"If you want to listen to my try hard song covers, just click start."}
          family={'regular'}
          size={TEXT.small}
          color={COLORS.gray}
        />
        <HeightSpacer height={60} />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Bottom')}>
            <Text style={styles.btnText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Onboarding;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 80,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnStyle: {
    backgroundColor: COLORS.dark,
    borderRadius: SIZES.xxLarge,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: COLORS.lightPurple,
    borderLeftWidth: 0,
    borderBottomWidth: 0
  },
  btnText: {
    color: COLORS.white,
    fontFamily: 'medium',
    fontSize: TEXT.large
  }
});