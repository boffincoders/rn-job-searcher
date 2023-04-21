import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';

const Header = () => {
  const navigation: any = useNavigation();
  return (
    <TalView>
      <TalView className="flex flex-row w-full justify-between items-center p-3">
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/images/arrow.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../../../assets/images/menu.png')} />
        </Pressable>
      </TalView>
      <TalView className="mt-4">
        <TalView className="bg-[#AFECFE] rounded-full p-3 z-10 absolute left-40">
          <Image
            style={{height: 40, width: 40}}
            source={require('../../../assets/images/google1.png')}
          />
        </TalView>
        <TalView className="bg-[#F3F2F2] w-full p-7 mt-10  z-0">
          <TalText className="text-primary text-center font-bold">
            UI/UX Designer
          </TalText>
          <TalView className="flex flex-row justify-around items-center mt-5">
            <TalText className="text-primary">Google</TalText>
            <TalView className="bg-primary p-1 rounded-full" />
            <TalText className="text-primary">California</TalText>
            <TalView className="bg-primary p-1 rounded-full" />
            <TalText className="text-primary">1 day ago</TalText>
          </TalView>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Header;
