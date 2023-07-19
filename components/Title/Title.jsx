import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import PropsTypes from 'prop-types';
import style from './style';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propsTypes = {
  title: PropsTypes.string.isRequired,
};

export default Title;
