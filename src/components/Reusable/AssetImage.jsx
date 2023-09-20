import { Image, StyleSheet } from 'react-native';
import meImage from '../../../assets/images/me.jpg';
import onboardingImg from '../../../assets/images/onboarding.jpg';
import placeHolder from '../../../assets/images/music_icon.png';
import banner from "../../../assets/images/banner.jpg";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import React from 'react';

const AssetImage = ({ source, width, height, radius }) => {
  let selectedImage = '';

  switch (source) {
    case 1:
      selectedImage = meImage;
      break;
    case 2:
      selectedImage = placeHolder;
      break;
    case 3:
      selectedImage = onboardingImg;
      break;
    case 4:
      selectedImage = banner;
      break;
    case 5:
      selectedImage = banner1;
      break;
    case 6:
      selectedImage = banner2;
      break;
    default:
      break;
  }

  return (
    <Image 
      source={selectedImage ? selectedImage : ''} 
      style={styles.imgStyles(width, height, radius)} 
    />
  )
}

export default AssetImage

const styles = StyleSheet.create({
  imgStyles: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover"
  })
})