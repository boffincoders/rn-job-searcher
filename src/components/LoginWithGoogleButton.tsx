import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {TalText} from './TalwindText';
import {TalView} from './TalwindView';

const LoginWithGoogleButton = ({
  title,
  googleIcon,
}: {
  title: string;
  googleIcon?: boolean;
}) => {
  return (
    <TouchableOpacity>
      <TalView className="w-60 p-3 items-center justify-center rounded flex-row bg-googlecolor">
        {googleIcon ? (
          <Image source={require('../assets/images/google.png')} />
        ) : null}
        <TalText className="text-center text-primary  uppercase text ml-2">
          {title}
        </TalText>
      </TalView>
    </TouchableOpacity>
  );
};

export default LoginWithGoogleButton;
