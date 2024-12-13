import RNFetchBlob from 'react-native-blob-util';
import { Alert } from 'react-native';
export const downloadImage = async (imageUri) => {
    try {
      const { config, fs } = RNFetchBlob;
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
          Alert.alert('Download Failed', 'Could not download the image.');
        });
    } catch (error) {
      console.error('Permission Error:', error);
    }
  };