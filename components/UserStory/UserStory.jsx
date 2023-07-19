import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
  Text,
  Image,
} from 'react-native';
import PropsTypes from 'prop-types';
import style from './style';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.proptype = {
  firstName: PropsTypes.string.isRequired,
};
export default UserStory;
