import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import SwitchToggle from 'react-native-switch-toggle';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Settings = () => {
  const [notification, setNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigation: any = useNavigation();
  const [bottomSheet, setBottomSheet] = useState(false);
  return (
    <TalView className="flex-1">
      <BottomSheet onClose={() => setBottomSheet(false)} isOpen={bottomSheet}>
        <TalText style={{paddingVertical: 20}}>Some random content</TalText>
      </BottomSheet>
      <TalView className="p-3">
        <BackButton />
        <TalText className="text-primary text-lg mt-7 font-semibold">
          Settings
        </TalText>
        <TalView className="mt-3">
          <TalView className="my-2 bg-white rounded-lg p-3 flex flex-row justify-between items-center">
            <TalView className="flex flex-row items-center">
              <Image source={require('../../assets/images/notification.png')} />
              <TalText className="ml-2">Notifications</TalText>
            </TalView>
            <SwitchToggle
              containerStyle={{
                width: 50,
                height: 25,
                borderRadius: 25,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
              }}
              switchOn={notification}
              onPress={() => setNotification(!notification)}
              circleColorOff="black"
              circleColorOn="white"
              backgroundColorOn="#56CD54"
              backgroundColorOff="#E5E5E5"
            />
          </TalView>
          <TalView className="my-2 bg-white rounded-lg p-3 flex flex-row justify-between items-center">
            <TalView className="flex flex-row items-center">
              <Image source={require('../../assets/images/moon.png')} />
              <TalText className="ml-2">Dark mode</TalText>
            </TalView>
            <SwitchToggle
              containerStyle={{
                width: 50,
                height: 25,
                borderRadius: 25,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
              }}
              switchOn={darkMode}
              onPress={() => setDarkMode(!darkMode)}
              circleColorOff="black"
              circleColorOn="white"
              backgroundColorOn="#56CD54"
              backgroundColorOff="#E5E5E5"
            />
          </TalView>
          <TalView className="my-2 bg-white rounded-lg p-3 flex flex-row justify-between items-center">
            <TalView className="flex flex-row items-center">
              <Image source={require('../../assets/images/lock.png')} />
              <TalText className="ml-2">Password</TalText>
            </TalView>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdatePassword')}>
              <Image source={require('../../assets/images/rightarrow.png')} />
            </TouchableOpacity>
          </TalView>
          <TalView className="my-2 bg-white rounded-lg p-4 flex flex-row justify-between items-center">
            <TalView className="flex flex-row items-center">
              <Image source={require('../../assets/images/logout.png')} />
              <TalText className="ml-2">Logout</TalText>
            </TalView>
            <TouchableOpacity onPress={() => setBottomSheet(true)}>
              <Image source={require('../../assets/images/rightarrow.png')} />
            </TouchableOpacity>
          </TalView>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Settings;
