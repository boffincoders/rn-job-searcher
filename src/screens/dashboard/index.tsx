import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posting from './Posting';
import Home from './Home';
import Create from './Create';

import Draft from './Savejob';
import BottomTabBar from './BottomTabbar';
import Messages from './Messages';
import SaveJobs from './Savejob';
const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posting" component={Posting} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="SaveJobs" component={SaveJobs} />
    </Tab.Navigator>
  );
};

export default Dashboard;
