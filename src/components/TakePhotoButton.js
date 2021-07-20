import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TakePhotoButton = ({color, size, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="camera-alt" color={color} size={size} />
    </TouchableOpacity>
  );
};

export default TakePhotoButton;
