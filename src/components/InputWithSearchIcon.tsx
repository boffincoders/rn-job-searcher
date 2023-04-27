import React from 'react';
import {Image, TextInput} from 'react-native';
import {TalView} from './TalwindView';

const InputWithSearchIcon = ({clear}: {clear: boolean}) => {
  return (
    <TalView className="flex flex-row bg-white p-3 rounded-2xl">
      <Image source={require('../assets/images/search.png')} />
      <TextInput
        placeholder="Search messages"
        style={{
          backgroundColor: 'white',
          flex: 1,
          padding: 3,
        }}
      />
      {clear && <Image source={require('../assets/images/remove.png')} />}
    </TalView>
  );
};

export default InputWithSearchIcon;
