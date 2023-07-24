import React from 'react';
import { View, Image } from 'react-native';
import { style } from './style';

function UserImage() {
  return (
    <View style={style.userImageWrapper}>
      <Image source={require('../../../assets/images/default_profile.png')} />
    </View>
  )
}

export default UserImage;