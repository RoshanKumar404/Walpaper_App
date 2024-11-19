import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './src/BottomTabs/Explore';
import AccountDetails from './src/StackScreens/AcountDetails';
import TermsOfService from './src/StackScreens/TermsOfService';
import PrivacyPolicy from './src/StackScreens/PrivacyPolicy';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Suggested from './src/TopTabs/Suggested';
import TopTabs, {BottomTabs} from './src/BottomTabs/ForYou'
import UseRewardedAd from './src/Ads/RewardedAds';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator containing Third and Home screens
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accounts" component={AccountDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Terms of service" component={TermsOfService} />
      <Stack.Screen name='Privacy policy' component={PrivacyPolicy}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

function App() {
  return (
    
    <NavigationContainer>
      
      <Tab.Navigator>
       
        <Tab.Screen
          name="For you"
          component={TopTabs}
          options={{
             headerShown: false,
            tabBarLabel: 'For You',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="cube" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeStack}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
