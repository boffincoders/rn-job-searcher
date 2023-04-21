import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const SignUp = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView>
      <TalView className="flex-1 items-center mt-10">
        <TalText className={`text-primary text-2xl font-bold`}>
          Create an Account
        </TalText>
        <TalText className="text-center text-textlight text-xs p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </TalText>
        <TalView className="mt-7">
          <AppInput label="Full name" />
          <AppInput label="Email" />
          <AppInput label="Password" secureTextEntry={true} />
        </TalView>
        <TalView className="d-flex justify-between items-center flex-row w-80">
          <TalText className="text-#AAA6B9 text-xs">Remember me</TalText>
          <TalText
            onPress={() => navigation.navigate('ForgotPassword')}
            className="text-primary text-xs">
            Forgot password ?
          </TalText>
        </TalView>
        <TalView className="mt-5">
          <AppButton title={'Sign up'} />
        </TalView>
        <TalView className="mt-5">
          <LoginWithGoogleButton title="Sign in with google" />
        </TalView>
        <TalView className="d-flex flex-row text-center mt-5">
          <TalText className="text-#524B6B text-xs">
            You don't have account yet?
          </TalText>
          <TalText
            className="text-secondary ml-1 text-xs underline"
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </TalText>
        </TalView>
      </TalView>
    </ScrollView>
  );
};

export default SignUp;
