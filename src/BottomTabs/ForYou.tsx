import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from '../TopTabs/Suggested';
import Liked from '../TopTabs/Liked';
import Library from '../TopTabs/Library';
import Suggested from '../TopTabs/Suggested';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16, // Adjust as needed
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#3382da', // Indicator color
        },
        tabBarActiveTintColor: '#3382da',  // Active tab color
        tabBarInactiveTintColor: 'gray',  // Inactive tab color
      }}
    >
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}
