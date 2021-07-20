import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FlashButton = ({color, size, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="flash-on" color={color} size={size} />
    </TouchableOpacity>
  );
};

export default FlashButton;
