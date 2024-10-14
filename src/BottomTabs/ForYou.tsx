import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Library from '../TopTabs/Library';
import Liked from '../TopTabs/Liked';
import Suggested from '../TopTabs/Suggested';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16, 
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#3382da', 
        },
        tabBarActiveTintColor: '#3382da',  
        tabBarInactiveTintColor: 'gray',  
      }}
    >
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

export default TopTabs;