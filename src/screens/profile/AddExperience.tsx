import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';

const AddExperience = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView>
      <TalView className="flex flex-1">
        <TalView className="p-3">
          <BackButton />
        </TalView>
        <TalView className="p-3 mt-3">
          <TalText className="text-primary font-bold text-lg">
            Add Work experience
          </TalText>
          <TalView className="mt-2">
            <AppInput label="Job title" />
            <AppInput label="Company" />
            <TalView className="gap-3 mt-1 flex flex-row items-center overflow-hidden">
              <TalView className="flex flex-1">
                <AppInput label="Start date" />
              </TalView>
              <TalView className="flex flex-1">
                <AppInput label="End date" />
              </TalView>
            </TalView>
            <TalView className="flex flex-row items-center mt-3">
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <TalView className="bg-white rounded-lg w-8 py-4">
                  {/* {isChecked ? (
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../../assets/images/check.png')}
                  />
                ) : null} */}
                </TalView>
              </TouchableOpacity>
              <TalText className="text-primary text-xs ml-4">
                This is my position now
              </TalText>
            </TalView>
            <AppInput
              placeholder="Write additional information here"
              multiline
              numberOfLines={6}
              style={{
                backgroundColor: 'white',
                height: 200,
                borderRadius: 20,
              }}
            />
            <TalView className="flex items-center justify-center mt-4">
              <AppButton title="Save" />
            </TalView>
          </TalView>
        </TalView>
      </TalView>
    </ScrollView>
  );
};

export default AddExperience;
