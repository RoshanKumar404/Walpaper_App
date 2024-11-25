import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import BanerAds from '../Ads/BannerAds';

const SUGGESTIONS_DATA = [
  { id: 1, image: 'https://images.pexels.com/photos/14551191/pexels-photo-14551191.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, image: 'https://images.pexels.com/photos/12397837/pexels-photo-12397837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, image: 'https://images.pexels.com/photos/8931864/pexels-photo-8931864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },

];

const { width } = Dimensions.get('window');

export default function LibraryScreen() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.5, { damping: 2 }, () => {
      scale.value = withSpring(1);
    });
  };

  const renderSuggestionItem = ({ item }) => (
    <View style={styles.suggestionItem}>
      <Image source={{ uri: item.image }} style={styles.suggestionImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      
      <BanerAds />

      
      <View style={styles.header}>
      
        <Text style={styles.headerText}>No Downloads Found</Text>
       <View style={styles.downloadIconContainer}>
        <Animated.View style={[styles.downloadIconWrapper, animatedStyle]}>
          <Pressable onPress={handlePress}>
            <Icon name="cloud-download-outline" size={70} color="red" />
          </Pressable>
        </Animated.View>
      </View>
        <Text style={styles.subHeaderText}>
          (Downloaded Collections will appear here)
        </Text>
      </View>
      <Text style={styles.suggestionsTitle}>Suggestions for you</Text>
      <FlatList
        data={SUGGESTIONS_DATA}
        renderItem={renderSuggestionItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.suggestionsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  downloadIconContainer: {
    marginVertical: 10, 
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
    marginTop: 20,
  },
  suggestionsList: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  suggestionItem: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  suggestionImage: {
    width: width / 2 - 20,
    height: 150,
    borderRadius: 10,
  },
});

