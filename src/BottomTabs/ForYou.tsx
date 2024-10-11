import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import { FontAwesome } from '@expo/vector-icons'; // Make sure to install this
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ForYou() {

  const HorizontalScrollViewImages = [
    {
      uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      uri: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },{
      uri: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },{
      uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },{
      uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },{
      uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },{
      uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },{
      uri: 'https://images.pexels.com/photos/28821755/pexels-photo-28821755/free-photo-of-scenic-view-of-cinque-terre-s-colorful-clifftop-village.jpeg?auto=compress&cs=tinysrgb&w=300',
    },{
      uri: 'https://images.pexels.com/photos/17634068/pexels-photo-17634068/free-photo-of-a-man-in-a-mask-is-cooking-food-on-a-grill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },{
      uri: 'https://images.pexels.com/photos/17634062/pexels-photo-17634062/free-photo-of-two-women-in-orange-aprons-are-preparing-food.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },{
      uri: 'https://images.pexels.com/photos/28821837/pexels-photo-28821837/free-photo-of-aerial-view-of-saint-moritz-village-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=300',
    },{
      uri: 'https://images.pexels.com/photos/28821748/pexels-photo-28821748/free-photo-of-venice-canal-with-gondola-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300',
    },{
      uri: 'https://images.pexels.com/photos/28821275/pexels-photo-28821275/free-photo-of-victor-emmanuel-ii-monument-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=300',
    },{
      uri: 'https://images.pexels.com/photos/28821761/pexels-photo-28821761/free-photo-of-scenic-tuscan-landscape-with-cypress-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300',
    }

  ]


  return (
    <View>
     
        <ScrollView horizontal={true}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=300',
            }}
            style={styles.images}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            }}
            style={styles.images}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.images}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.images}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.images}
          />
        </ScrollView>
     
      
      <ScrollView contentContainerStyle={styles.container}>
      {HorizontalScrollViewImages.map((image, index) => (
        <View key={index} style={styles.cardContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          <View style={styles.overlay}>
            <FontAwesome5 name="crown" size={24} color="white" />
          </View>
        </View>
      ))}
    </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  cardContainer: {
    position: 'relative',
    marginBottom: 20,
    width: 150, // Adjust as needed
    height: 100, // Adjust as needed
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Rounded corners
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  overlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    borderRadius: 15,
    padding: 5,
  },
  images: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius:10
  },
});
