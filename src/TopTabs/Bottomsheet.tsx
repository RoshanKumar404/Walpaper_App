import React, { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { downloadImage } from '../constants/Downloads';

export default function BottomSheetApp({
  visible,
  onClose,
  imageUri,
  imageName,
  ImageStandard,
  imageRes,
  ImageArtist,
}) {
  const [loading, setLoading] = useState(true);
  const [adLoaded, setAdLoaded] = useState(false);
  const [reloadKey,setReloadKey]=useState(0)

  const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-4394707558760404~9878961308';
  const rewarded = RewardedAd.createForAdRequest(adUnitId);

  useEffect(() => {
    const onAdLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setAdLoaded(true);
      console.log("add loaded");
      
    });
    
  
    const onAdEarnedReward = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      console.log('User earned reward:', reward);
      Alert.alert('Reward Earned', `You earned: ${reward.amount} ${reward.type}`);
      rewarded.load();
      setReloadKey((prev)=>prev+1)
    });
 
  
    rewarded.load();
  
    return () => {
      onAdLoaded(); // Cleanup listener
      onAdEarnedReward(); // Cleanup listener
   
    };
  }, []);
  

  // const downloadImage = async () => {
  //   try {
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
  //   }
  // };

  const handleGetWallpaper = () => {
    
    // if (adLoaded) {
    //   rewarded.show();
     // rewarded.load(); // Prepare the next ad
      downloadImage(imageUri,imageName);
      onClose();
    // } else {
    //   Alert.alert('Ad Not Ready', 'Please wait for the ad to load.');
    // }
    // return { adLoaded, reloadKey, rewarded };
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
            onPress={handleGetWallpaper}
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
