import {styled} from 'nativewind';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {TalText} from './TalwindText';
import {TalView} from './TalwindView';
const TalTextInput = styled(TextInput);
interface IAppInput extends TextInputProps {
  label?: string;
}
const AppInput = ({
  label,
  secureTextEntry,
  multiline,
  numberOfLines,
  style,
}: IAppInput) => {
  return (
    <TalView className="py-2">
      <TalText className="text-justify text-primary">{label}</TalText>
      <TalTextInput
        style={style}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        className="rounded-md py-2 w-full bg-white mt-2"
      />
    </TalView>
  );
};

export default AppInput;
