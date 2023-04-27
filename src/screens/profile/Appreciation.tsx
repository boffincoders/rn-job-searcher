import React from 'react';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';

const Appreciation = () => {
  return (
    <TalView className="flex-1">
      <TalView className="p-3">
        <BackButton />
        <TalText className="text-primary font-bold text-lg mt-5">
          Add Appreciation
        </TalText>

        <TalView>
          <AppInput label="Award name" />
        </TalView>
        <TalView>
          <AppInput label="Category/Achievement achieved" />
        </TalView>
        <TalView className="w-1/2">
          <AppInput label="End date" />
        </TalView>

        <TalView>
          <AppInput
            label="Description"
            placeholder="write additional information here"
            multiline
            numberOfLines={6}
            style={{
              backgroundColor: 'white',
              height: 200,
              borderRadius: 20,
            }}
          />
        </TalView>

        <TalView className="flex items-center justify-center mt-4">
          <AppButton title="Save" />
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Appreciation;
