import React from 'react';
import {Image} from 'react-native';
import AppButton from '../../components/AppButton';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Resume = () => {
  return (
    <TalView className="flex-1">
      <TalView className="p-3">
        <BackButton />
        <TalText className="text-primary font-bold text-lg mt-5">
          Add Resume
        </TalText>
        <TalView className="border-[#9D97B5] border-2 border-dotted  rounded-md mt-4 flex flex-row justify-center items-center   p-7">
          <TalView className="flex flex-row justify-center items-center">
            <Image source={require('../../assets/images/upload.png')} />
            <TalText className="text-primary text-xs ml-2">
              Upload CV/Resume
            </TalText>
          </TalView>
        </TalView>
        <TalText className="text-[#AAA6B9] text-xs text-justify mt-3">
          Upload files in PDF format up to 5 MB. Just upload it once and you can
          use it in your next application.
        </TalText>
      </TalView>
      <TalView className="flex items-center justify-center mt-4 content-end">
        <AppButton title="Save" />
      </TalView>
    </TalView>
  );
};

export default Resume;
