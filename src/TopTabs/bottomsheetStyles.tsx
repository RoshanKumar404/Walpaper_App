import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
