import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posting from './Posting';
import Home from './Home';
import Create from './Create';
import Chat from './Chat';
import Draft from './Draft';
import BottomTabBar from './BottomTabbar';
const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posting" component={Posting} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Draft" component={Draft} />
    </Tab.Navigator>
  );
};

export default Dashboard;
