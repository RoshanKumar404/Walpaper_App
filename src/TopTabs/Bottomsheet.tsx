import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';

export default function BottomSheetApp({
  visible,
  onClose,
  imageUri,
  imageName,
  ImageStandard,
  imageRes,
  ImageArtist,
}) {
  const [loading, setLoading] = React.useState(true);

  // const requestStoragePermission = async () => {
  //   if (Platform.OS === 'android' && Platform.Version >= 30) {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission Required',
  //         message: 'App needs access to your storage to download images.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       }
  //     );
  //     return granted === PermissionsAndroid.RESULTS.GRANTED;
  //   }
  //   return true;
  // };

  const downloadImage = async () => {
    // const hasPermission = await requestStoragePermission();
    // if (!hasPermission) {
    //   Alert.alert('Permission Denied', 'Cannot download without storage permission');
    //   return;
    // }

    const {config, fs} = RNFetchBlob;
    const date = new Date();
    const filePath = `${fs.dirs.DownloadDir}/wallpaper_${date.getTime()}.jpg`;

    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: filePath,
        description: 'Downloading wallpaper',
      },
    })
      .fetch('GET', imageUri)
      .then((res) => {
        Alert.alert('Download Successful', `Image saved to: ${res.path()}`);
      })
      .catch((error) => {
        console.error('Download Error:', error);
      });
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.box}>
          {imageUri && (
            <>
              {loading && (
                <ActivityIndicator
                  style={styles.loader}
                  size="large"
                  color="#ffffff"
                />
              )}
              <Image
                source={{ uri: imageUri }}
                style={styles.image}
                onLoadEnd={() => setLoading(false)}
              />
            </>
          )}
          {imageName && (
            <Text style={styles.imageName}>{imageName}</Text>
          )}
          <Pressable
            onPress={() => {
              downloadImage();
              onClose();
            }}
            style={styles.closeButton}>
            <Text style={styles.buttonText}>Get Wallpaper</Text>
          </Pressable>
          <View style={styles.details}>
            {ImageArtist && (
              <Text style={styles.detailText}>Artist: {ImageArtist}</Text>
            )}
            {imageRes && (
              <Text style={styles.detailText}>Resolution: {imageRes}</Text>
            )}
            {ImageStandard && (
              <Text style={styles.detailText}>Standard: {ImageStandard}</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.8)',
  },
  box: {
    width: '90%',
    height: height * 0.8,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    marginVertical: 10,
  },
  loader: {
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
  },
  imageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  closeButton: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  details: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  detailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
});
