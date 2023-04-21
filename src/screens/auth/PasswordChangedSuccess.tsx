import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import LoginWithGoogleButton from '../../components/LoginWithGoogleButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';

const PasswordChangedSuccess = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView>
      <TalView className="flex-1 items-center mt-10">
        <TalText className={`text-primary text-2xl font-bold`}>
          Successfully
        </TalText>
        <TalText className="text-center text-textlight text-xs p-2">
          Your password has been updated, please change your password regularly
          to avoid this happening
        </TalText>
        <Image
          style={{marginTop: 40}}
          source={require('../../assets/images/passwordchange.png')}
        />
        <TalView className="mt-10">
          <AppButton
            title={'Continue'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </TalView>
        <TalView className="mt-5">
          <LoginWithGoogleButton title="Back to Login" googleIcon={false} />
        </TalView>
      </TalView>
    </ScrollView>
  );
};

export default PasswordChangedSuccess;
