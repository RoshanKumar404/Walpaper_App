import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BanerAds from '../Ads/BannerAds';
import { useDispatch, useSelector } from 'react-redux';
import { addtoliked } from '../redux/action';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


const SUGGESTIONS_DATA = [
  { id: 1, image: 'https://images.pexels.com/photos/14551191/pexels-photo-14551191.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, image: 'https://images.pexels.com/photos/12397837/pexels-photo-12397837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, image: 'https://images.pexels.com/photos/8931864/pexels-photo-8931864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 4, image: 'https://images.pexels.com/photos/8347836/pexels-photo-8347836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 5, image: 'https://images.pexels.com/photos/13261563/pexels-photo-13261563.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 6, image: 'https://images.pexels.com/photos/3744162/pexels-photo-3744162.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 7, image: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 8, image: 'https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 9, image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 10, image: 'https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 11, image: 'https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 12, image: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 13, image: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=600' },
 
];

export default function LikedScreen() {
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.Likereducer.likedImages);
  
  const likeHandler = (item) => {
    // Check if the image is already in the liked list
    const isLiked = likedImages.some((image) => image.id === item.id);
    if (!isLiked) {
      dispatch(addtoliked(item));
    } else {
      console.warn('Image already liked.');
    }
  };

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.5, { damping: 2 }, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <View style={styles.likedScreenContainer}>
      <BanerAds />

      {/* Liked Images Section */}
      {likedImages.length > 0 ? (
        <FlatList
          data={likedImages.filter((item) => item && item.id)} // Filter valid items
          renderItem={({ item }) => (
            <View style={styles.suggestionItem}>
              <Image source={{ uri: item.image }} style={styles.suggestionImage} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      ) : (
        <View style={styles.emptyStateContainer}>
          <Animated.View style={[styles.downloadIconWrapper, animatedStyle]}>
            <Pressable onPress={handlePress}>
              <Icon name="heart" size={70} color="red" />
            </Pressable>
          </Animated.View>
          <Text style={styles.noFavoritesText}>No Liked Found</Text>
          <Text style={styles.subText}>Liked Collections will appear here</Text>
        </View>
      )}

      {/* Suggestions Header */}
      <Text style={styles.suggestionsHeader}>Suggestions for you</Text>

      {/* Suggestions List */}
      <FlatList
        data={SUGGESTIONS_DATA}
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Image source={{ uri: item.image }} style={styles.suggestionImage} />
            <View style={styles.Overlays}>
              <Pressable onPress={() => likeHandler(item)}>
                <Icon name="heart-outline" size={16} color="red" />
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  likedScreenContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  downloadIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  suggestionsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  suggestionItem: {
    position: 'relative',
    marginBottom: 20,
    width: '47%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  suggestionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  Overlays: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
  },
});

