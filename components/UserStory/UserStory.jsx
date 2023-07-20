import React from 'react';
import {View, Text, Image} from 'react-native';
import PropsTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage />
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.proptype = {
  firstName: PropsTypes.string.isRequired,
};
export default UserStory;
