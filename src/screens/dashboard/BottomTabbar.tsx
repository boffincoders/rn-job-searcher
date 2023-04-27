import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {TalView} from '../../components/TalwindView';
const BottomTabBar = (props: BottomTabBarProps) => {
  const {descriptors, state, navigation} = props;
  const renderBottomIcons = (label: string, isFocused: boolean) => {
    switch (label) {
      case 'Home':
        return (
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? '#FCA34D' : 'grey',
            }}
            source={require('../../assets/images/home.png')}
          />
        );
      case 'Posting':
        return (
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? '#FCA34D' : 'grey',
            }}
            source={require('../../assets/images/connection.png')}
          />
        );
      case 'Create':
        return (
          <Image
            style={{
              height: 35,
              width: 35,
            }}
            source={require('../../assets/images/add.png')}
          />
        );
      case 'Messages':
        return (
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? '#FCA34D' : 'grey',
            }}
            source={require('../../assets/images/message.png')}
          />
        );
      case 'SaveJobs':
        return (
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? '#FCA34D' : 'grey',
            }}
            source={require('../../assets/images/draft.png')}
          />
        );
    }
  };
  return (
    <TalView className="d-flex flex-row  bg-white p-2">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true} as any);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TalView
            key={index}
            className="d-flex flex-column flex-1 justify-center items-center">
            <TouchableOpacity
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {renderBottomIcons(label, isFocused)}
            </TouchableOpacity>
          </TalView>
        );
      })}
    </TalView>
  );
};

export default BottomTabBar;
