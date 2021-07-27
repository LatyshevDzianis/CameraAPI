import React, {memo} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import FlashButton from './FlashButton';
import TakePhotoButton from './TakePhotoButton';
import SaveImageButton from './SaveImageButton';
import RetakeButton from './RetakeButton';

const BottomTollbar = ({
  thumbnailImageUri,
  takePicture,
  isPreviewMode,
  acceptPicture,
  toggleFlash,
  retakePicture,
}) => {
  return (
    <View style={styles.bottomToolBar}>
      {!isPreviewMode ? (
        <>
          <FlashButton onPress={toggleFlash} color="white" size={50} />
          <TakePhotoButton onPress={takePicture} color="white" size={50} />
          <Image
            borderRadius={50}
            source={{uri: thumbnailImageUri}}
            style={styles.image}
          />
        </>
      ) : (
        <>
          <SaveImageButton onPress={acceptPicture} color="white" size={50} />
          <RetakeButton onPress={retakePicture} color="white" size={50} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomToolBar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default memo(BottomTollbar);
