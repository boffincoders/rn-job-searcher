import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TalText} from './TalwindText';
import {TalView} from './TalwindView';
const AppButton = ({title, onPress}: {title: string; onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TalView className="w-60 bg-primary p-3 rounded">
        <TalText className="text-center text-white uppercase">{title}</TalText>
      </TalView>
    </TouchableOpacity>
  );
};

export default AppButton;
