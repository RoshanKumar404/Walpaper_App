import {
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomSheetApp from './Bottomsheet';
import { addtoliked } from '../redux/action';
import { useDispatch } from 'react-redux';

export default function Suggested() {
  const [pressed, setpressed] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const imagePressed = image => {
    setpressed(image); 
    setModalVisible(true);
  };

  const HorizontalScrollViewImages = [
    {
      id:1,
      uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:2,
      uri: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:3,
      uri: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:4,
      uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:5,
      uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:6,
      uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:7,
      uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:8,
      uri: 'https://images.pexels.com/photos/28821755/pexels-photo-28821755/free-photo-of-scenic-view-of-cinque-terre-s-colorful-clifftop-village.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:9,
      uri: 'https://images.pexels.com/photos/17634068/pexels-photo-17634068/free-photo-of-a-man-in-a-mask-is-cooking-food-on-a-grill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {id:10,
      uri: 'https://images.pexels.com/photos/17634062/pexels-photo-17634062/free-photo-of-two-women-in-orange-aprons-are-preparing-food.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:11,
      uri: 'https://images.pexels.com/photos/28821837/pexels-photo-28821837/free-photo-of-aerial-view-of-saint-moritz-village-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:12,
      uri: 'https://images.pexels.com/photos/28821748/pexels-photo-28821748/free-photo-of-venice-canal-with-gondola-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:13,
      uri: 'https://images.pexels.com/photos/28821275/pexels-photo-28821275/free-photo-of-victor-emmanuel-ii-monument-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
    {
      id:14,
      uri: 'https://images.pexels.com/photos/28821761/pexels-photo-28821761/free-photo-of-scenic-tuscan-landscape-with-cypress-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300',
      Artist: 'Luicia Fusia',
      Res: '1920 X 1080',
      name: 'WaterFall',
      standard: 'HD 1080 X 1920',
    },
  
  ];
  const dispatch=useDispatch()
  const likeHandler=(id)=>{
   console.warn("just clikable",id);
   dispatch(addtoliked(id))
  }
  return (
    <View>
      <View style={styles.horizontalviewcontainer}>
        <ScrollView horizontal={true}>
          <Image
          id='1'
            source={{
              uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=300',
            }}
            style={styles.images}
          /><Image
          id='2'
          source={{
            uri: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          }}
          style={styles.images}
        />
        <Image
        id='3'
          source={{
            uri: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.images}
        />
        <Image
        id='4'
          source={{
            uri: 'https://images.pexels.com/photos/19879827/pexels-photo-19879827/free-photo-of-blue-and-white-windmill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.images}
        />
        <Image
        id='5'
          source={{
            uri: 'https://images.pexels.com/photos/17647537/pexels-photo-17647537/free-photo-of-a-man-sitting-on-a-bench-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.images}
        />
          
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.container}
       //contentContainerStyle={styles.scrollView}
       refreshControl={
         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
       }
      >
        {HorizontalScrollViewImages.map((image, id) => (
          <Pressable key={id} onPress={() => imagePressed(image)}>
            <View style={styles.cardContainer}>
              <Image key={id} source={{uri: image.uri}} style={styles.image} />
              <View style={styles.overlay}>
                <Pressable onPress={()=>likeHandler(id)}>
                <FontAwesome5 name="heart" size={24} color="red" />
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}
        {pressed && (
          <BottomSheetApp
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            imageUri={pressed.uri}
            imageName={pressed.name}
            ImageArtist={pressed.Artist}
            imageRes={pressed.Res}
            ImageStandard={pressed.standard}
          />
        )}
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
    paddingBottom: '57%',
  },
  cardContainer: {
    position: 'relative',
    marginBottom: 20,
    width: 170,
    height: 340,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
  },
  images: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  horizontalviewcontainer: {
    paddingBottom: 10,
  },
});
