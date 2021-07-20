import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RetakeButton = ({color, size, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="rotate-left" color={color} size={size} />
    </TouchableOpacity>
  );
};

export default RetakeButton;
