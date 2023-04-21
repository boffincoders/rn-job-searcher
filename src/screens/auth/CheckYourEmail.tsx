import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';

const CheckYourEmail = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView>
      <TalView className="flex-1 items-center mt-10">
        <TalText className={`text-primary text-2xl font-bold`}>
          Check Your Email?
        </TalText>
        <TalText className="text-center text-textlight text-xs p-2">
          We have sent the reset password to the email address
          brandonelouis@gmial.com
        </TalText>

        <Image
          style={{marginTop: 40}}
          source={require('../../assets/images/checkmail.png')}
        />
        <TalView className="mt-7">
          <AppInput label="Email" />
        </TalView>
        <TalView className="mt-5">
          <AppButton
            title={'Open Your Email'}
            onPress={() => navigation.navigate('PasswordChangedSuccess')}
          />
        </TalView>
        <TalView className="mt-5">
          <LoginWithGoogleButton title="Back to Login" googleIcon={false} />
        </TalView>
        <TalView className="d-flex flex-row text-center mt-5">
          <TalText className="text-#524B6B text-xs">
            You don't have account yet?
          </TalText>
          <TalText
            className="text-secondary ml-1 text-xs underline"
            onPress={() => navigation.navigate('SignUp')}>
            Resend
          </TalText>
        </TalView>
      </TalView>
    </ScrollView>
  );
};

export default CheckYourEmail;