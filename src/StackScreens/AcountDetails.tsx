import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function AccountDetails({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Account Screen</Text>
        <Button title='take me to privacy policy ' onPress={()=>navigation.navigate('Privacy policy')}/>
          <Button title='take me to Term and condition' onPress={()=>navigation.navigate('Terms of service')} />
      {/* //  <Button title='lets go to third screen' onPress={()=>navigation.navigate('Third')}></Button> */}
      </View>
    );
  }
  

const styles = StyleSheet.create({})