import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import CenteredSquare from './src/components/CenteredSquare';
import BottomTollbar from './src/components/BottomTollbar';
import ReactNativeCamera from './src/components/ReactNativeCamera';

const hasAndroidPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};

const savePicture = async tag => {
  if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    return;
  }

  CameraRoll.save(tag);
};

const App = () => {
  const [camera, setCamera] = useState(null);
  const [flash, setFlash] = useState(false);
  const [previewImageUri, setPreviewImageUri] = useState(null);
  const [thumbnailImageUri, setThumbnailImageUri] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  useEffect(() => {
    getPreview();
  }, [getPreview]);

  const takePicture = useCallback(async () => {
    setIsPreviewMode(true);

    if (camera) {
      try {
        const options = {quality: 1, base64: true, pauseAfterCapture: true};
        const data = await camera.takePictureAsync(options);

        setPreviewImageUri(data.uri);
      } catch (e) {
        console.error('Something went wrong with taking picture! Details: ', e);
      }
    }
  }, [camera]);

  const acceptPicture = useCallback(async () => {
    setThumbnailImageUri(previewImageUri);

    try {
      await savePicture(previewImageUri);
    } catch (e) {
      console.error('Something went wrong with saving picture! Details: ', e);
    }

    camera.resumePreview();

    setIsPreviewMode(false);
  }, [camera, previewImageUri]);

  const retakePicture = useCallback(() => {
    setPreviewImageUri(null);
    setIsPreviewMode(false);

    camera.resumePreview();
  }, [camera]);

  const getPreview = useCallback(async () => {
    try {
      const response = await CameraRoll.getPhotos({
        first: 1,
        assetType: 'Photos',
      });

      setThumbnailImageUri(response.edges[0].node.image.uri);
    } catch (e) {
      console.error(
        'Something went wrong with getting preview image! Details: ',
        e,
      );
    }
  }, []);

  const toggleFlash = useCallback(() => setFlash(prev => !prev), []);

  return (
    <View style={styles.container}>
      <ReactNativeCamera setCamera={setCamera} flash={flash} />
      {!isPreviewMode && <CenteredSquare />}
      <BottomTollbar
        takePicture={takePicture}
        thumbnailImageUri={thumbnailImageUri}
        isPreviewMode={isPreviewMode}
        setIsPreviewMode={setIsPreviewMode}
        retakePicture={retakePicture}
        acceptPicture={acceptPicture}
        toggleFlash={toggleFlash}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
