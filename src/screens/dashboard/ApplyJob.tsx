import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import Header from './jobtabs/Header';
const ApplyJob = () => {
  const TalScrollView = styled(ScrollView);
  const navigation: any = useNavigation();
  return (
    <TalScrollView className="flex flex-1 bg-[#E5E5E5]">
      <Header />
      <TalView className="p-3">
        <TalView className="bg-[#f3efff] flex flex-row p-3 rounded-lg">
          <Image source={require('../../assets/images/PDF.png')} />
          <TalView className="ml-2">
            <TalText className="text-xs text-primary">
              Jamet kudasi - CV - UI/UX Designer
            </TalText>
            <TalText className="text-xs text-[#AAA6B9]">
              14 Feb 2022 at 11:30 am
            </TalText>
          </TalView>
        </TalView>
        <TalView className="justify-center items-center mt-5">
          <Image source={require('../../assets/images/uploaded.png')} />
        </TalView>
        <TalText className="text-center mt-4">Successful</TalText>
        <TalText className=" text-center mt-4 text-xs text-[#524B6B]">
          Congratulations, your application has been sent
        </TalText>
        <TalView className="flex h-24  justify-between flex-col items-center mt-4">
          <LoginWithGoogleButton
            title="Find a similar job"
            googleIcon={false}
          />
          <AppButton
            title="Back to home"
            onPress={() => navigation.navigate('Home')}
          />
        </TalView>
      </TalView>
    </TalScrollView>
  );
};

export default ApplyJob;
