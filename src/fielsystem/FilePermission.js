// import { PermissionsAndroid } from "react-native";
// export const requetPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'WallPaper app Storage Permission',
//           message:
//             'WallPaper App needs access to your Storage ' +
//             'so you can Download awesome Wallpapers.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the Storage');
//       } else {
//         console.log('Storage permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
// };