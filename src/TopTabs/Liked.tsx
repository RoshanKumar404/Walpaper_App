import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BanerAds from '../Ads/BannerAds';


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
  return (
    // <View>
    <View style={styles.likedScreenContainer}>
     
        <BanerAds/>
      
      <View style={styles.profileContainer}>
        <Image
          source={require('../constants/Unknown_person.jpg')}
          style={styles.profileImage}
        />
        <Pressable style={styles.editIcon}>
          <Icon name="pencil" size={16} color="white" />
        </Pressable>
      </View>
      
     <View style={styles.favourite}>
      <Text style={styles.noFavoritesText}>No favorites found</Text>
      <Icon name="heart" size={70} color="red" />
      
      <Text style={styles.subText}>(wallpapers you "like" will appear here)</Text>
      </View>
   
      <Text style={styles.suggestionsHeader}>Suggestions for you</Text>

     
      {/* <View style={styles.container}> */}
      <FlatList
        data={SUGGESTIONS_DATA}
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Image source={{ uri: item.image }} style={styles.suggestionImage} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      </View>
     //</View>
  );
}

// Styles
const styles = StyleSheet.create({
  likedScreenContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  favourite:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 5,
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
    color: '#333',
  },
  subText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  suggestionsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  // container:{
  //   flex:1,
  //   flexDirection:'row',
  //   flexWrap:'wrap',
  //   justifyContent:'space-around',
  //   padding:10,
  //   paddingBottom:'58%'
  // },
  suggestionItem: {
   position: 'relative',
    marginBottom: 20,
    width: '47%',
    borderRadius:10,
    overflow:'hidden',
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25,
    shadowRadius:3.84,

  },
  suggestionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  columnWrapper:{
    justifyContent:'space-between'
  }
});
