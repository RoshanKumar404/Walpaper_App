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
} from 'react-native';
import { createWallpaperFile } from '../fielsystem/filecreation';


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

          <Pressable onPress={()=>{
            createWallpaperFile();
            onClose();
          }} style={styles.closeButton}>
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
