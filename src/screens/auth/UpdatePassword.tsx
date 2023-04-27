import React from 'react';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const UpdatePassword = () => {
  return (
    <TalView className="flex-1">
      <TalView className="p-5">
        <BackButton />
        <TalText className="text-primary text-lg mt-6 font-semibold">
          Update Password
        </TalText>
        <TalView className="mt-3">
          <TalView>
            <AppInput label="Old Password" />
          </TalView>
          <TalView>
            <AppInput label="New Password" />
          </TalView>
          <TalView>
            <AppInput label="Confirm Password" />
          </TalView>
        </TalView>
        <TalView className="flex items-center justify-center mt-4">
          <AppButton title="Update" />
        </TalView>
      </TalView>
    </TalView>
  );
};

export default UpdatePassword;
