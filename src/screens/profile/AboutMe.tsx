import React from 'react';
import {ScrollView, TextInput} from 'react-native';
import AppButton from '../../components/AppButton';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const AboutMe = () => {
  return (
    <ScrollView>
      <TalView className="flex flex-1">
        <TalView className="p-3">
          <BackButton />
        </TalView>
        <TalView className="p-3 mt-3">
          <TalText className="text-primary font-bold text-lg">About me</TalText>
        </TalView>
      </TalView>
      <TalView className="p-3">
        <TextInput
          placeholder="Tell me about you"
          multiline={true}
          numberOfLines={6}
          style={{
            backgroundColor: 'white',
            padding: 10,
            height: 200,
            borderRadius: 20,
          }}
        />
      </TalView>
      <TalView className="flex items-center justify-center mt-52">
        <AppButton title="Save" />
      </TalView>
    </ScrollView>
  );
};

export default AboutMe;
