// import RNFetchBlob from 'react-native-blob-util';
// import { PermissionsAndroid, Platform, Alert, Linking } from 'react-native';

// export const downloadImage = async (imageUri, imageName) => {
//   const checkPermissions = async () => {
//     if (Platform.OS === 'android') {
//       const hasPermission = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//       );
//       if (!hasPermission) {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'Storage Permission Required',
//             message: 'This app needs access to your storage to download wallpapers.',
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//           Alert.alert(
//             'Permission Denied',
//             'Storage permission is permanently denied. Please enable it in settings.',
//             [
//               { text: 'Cancel', style: 'cancel' },
//               { text: 'Open Settings', onPress: () => Linking.openSettings() },
//             ]
//           );
//         }
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       }
//       return true; // Permission already granted
//     }
//     return true; // Not Android
//   };

//   try {
//     const hasPermission = await checkPermissions();
//     if (!hasPermission) {
//       return;
//     }

//     const { config, fs } = RNFetchBlob;
//     const date = new Date();
//     const filePath = `${fs.dirs.DownloadDir}/wallpaper_${imageName}_${date.getTime()}.jpg`;

//     config({
//       fileCache: true,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         path: filePath,
//         description: 'Downloading wallpaper',
//       },
//     })
//       .fetch('GET', imageUri)
//       .then((res) => {
//         Alert.alert('Download Successful', `Image saved to: ${res.path()}`);
//       })
//       .catch((error) => {
//         console.error('Download Error:', error);
//         Alert.alert('Download Failed', 'Could not download the image.');
//       });
//   } catch (error) {
//     console.error('Permission Error:', error);
//     Alert.alert('Permission Error', 'Something went wrong while requesting permissions.');
//   }
// };
import RNFetchBlob from 'react-native-blob-util';
import { Alert } from 'react-native';
export const downloadImage = async (imageUri,imageName) => {
    try {
      const { config, fs } = RNFetchBlob;
      const date = new Date();
      const filePath = `${fs.dirs.DownloadDir}/wallpaper_${imageName}${date.getTime()}.jpg`;

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