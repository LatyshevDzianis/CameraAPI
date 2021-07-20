import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SaveImageButton = ({color, size, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="check" color={color} size={size} />
    </TouchableOpacity>
  );
};

export default SaveImageButton;
