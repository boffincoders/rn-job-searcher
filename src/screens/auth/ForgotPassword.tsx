import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';

const ForgotPassword = () => {
  const navigation: any = useNavigation();
  return (
    // <ScrollView>
    <TalView className="flex-1 mt-10 items-center md:justify-center">
      <TalText className={`text-primary md:text-3xl font-bold`}>
        Forgot Password?
      </TalText>
      <TalText className="text-center text-textlight text-xs md:text-lg p-2">
        To reset your password, you need your email or mobile number that can be
        authenticated
      </TalText>

      <Image
        style={{marginTop: 40}}
        source={require('../../assets/images/forgot.png')}
      />
      <TalView className="mt-7">
        <AppInput label="Email" />
      </TalView>
      <TalView className="mt-5">
        <AppButton
          title={'Reset password'}
          onPress={() => navigation.navigate('CheckYourEmail')}
        />
      </TalView>
      <TalView className="mt-5">
        <LoginWithGoogleButton title="Back to Login" googleIcon={false} />
      </TalView>
    </TalView>
    // </ScrollView>
  );
};

export default ForgotPassword;
