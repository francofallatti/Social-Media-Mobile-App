import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, heigth} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidelineBaseHeigth = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (heigth / guidelineBaseHeigth()) * size;
const scaleFontSizze = size =>
  Math.round((size * width) / guidelineBaseFonts());

export {horizontalScale, verticalScale, scaleFontSizze};
