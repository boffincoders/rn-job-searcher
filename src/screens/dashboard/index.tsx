import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posting from './Posting';
import Home from './Home';
import BottomTabBar from './BottomTabbar';
import Messages from './Messages';
import SaveJobs from './Savejob';
import {TalView} from '../../components/TalwindView';
import {Image} from 'react-native';
const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  const HeaderRight = () => {
    return (
      <TalView className="flex flex-row ">
        <Image source={require('../../assets/images/edit.png')} />
        <Image source={require('../../assets/images/menu.png')} />
      </TalView>
    );
  };
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: true}}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Posting"
        component={Posting}
      />
      {/* <Tab.Screen name="Create" component={Create} /> */}
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          headerRight: () => {
            return <HeaderRight />;
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#ff00ff00'},
        }}
      />
      <Tab.Screen
        options={{
          headerRight: () => {
            return <HeaderRight />;
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#ff00ff00'},
        }}
        name="SaveJobs"
        component={SaveJobs}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
