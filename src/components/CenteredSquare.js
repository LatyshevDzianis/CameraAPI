import React from 'react';
import {View, StyleSheet} from 'react-native';

const CenteredSquare = () => {
  return (
    <>
      <View style={styles.squareTop}>
        <View style={[styles.leftTop, styles.corner]} />
        <View style={[styles.rightTop, styles.corner]} />
      </View>
      <View style={styles.squareBottom}>
        <View style={[styles.leftBottom, styles.corner]} />
        <View style={[styles.rightBottom, styles.corner]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  corner: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  squareTop: {
    position: 'absolute',
    top: '35%',
    left: '30%',
    flexDirection: 'row',
  },
  squareBottom: {
    position: 'absolute',
    top: '45%',
    left: '30%',
    flexDirection: 'row',
  },
  leftTop: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
  },
  rightTop: {
    borderTopWidth: 3,
    borderRightWidth: 3,
  },
  rightBottom: {
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
  leftBottom: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
  },
});

export default CenteredSquare;
