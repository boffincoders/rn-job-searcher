import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SwitchToggle from 'react-native-switch-toggle';
import AppButton from '../../components/AppButton';
import BackButton from '../../components/backButton';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Settings = () => {
  const [notification, setNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigation: any = useNavigation();

  const ref = useRef<any>(null);
  return (
    <TalView className="flex-1">
      <RBSheet
        closeOnDragDown={true}
        closeOnPressMask={true}
        ref={ref}
        height={300}
        openDuration={250}>
        <TalView className="flex-1 justify-center items-center">
          <TalText className="text-primary font-semibold text-md mt-2">
            Log out
          </TalText>
          <TalText className="text-[#524B6B] text-xs mt-5">
            Are you sure you want to leave?
          </TalText>

          <TalView className="mt-2">
            <AppButton title={'Yes'} />
          </TalView>
          <TalView className="mt-2">
            <LoginWithGoogleButton title="Cancel" googleIcon={false} />
          </TalView>
        </TalView>
      </RBSheet>
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
            <TouchableOpacity onPress={() => ref.current.open()}>
              <Image source={require('../../assets/images/rightarrow.png')} />
            </TouchableOpacity>
          </TalView>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Settings;
