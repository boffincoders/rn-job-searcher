import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React from 'react';
import {Image, ScrollView, TextInput} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import Header from './jobtabs/Header';
const UploadCV = () => {
  const TalScrollView = styled(ScrollView);
  const navigation: any = useNavigation();
  return (
    <TalScrollView className="flex flex-1 bg-[#E5E5E5]">
      <Header />
      <TalView className="p-3">
        <TalText className="text-primary  font-bold text-xs mt-2">
          Upload CV
        </TalText>
        <TalText className="text-xs text-[#524B6B] mt-1">
          Add your CV/Resume to apply for a job
        </TalText>

        <TalView className="border-[#9D97B5] border-2 border-dotted w-full p-7 rounded-md mt-4 flex flex-row justify-center items-center">
          <TalView className="flex flex-row justify-center items-center">
            <Image source={require('../../assets/images/upload.png')} />
            <TalText className="text-primary text-xs ml-2">
              Upload CV/Resume
            </TalText>
          </TalView>
        </TalView>
        <TalText className="text-primary text-xs font-bold mt-2">
          Information
        </TalText>
        <TextInput
          placeholder="Explain why you are the right person for this job"
          numberOfLines={6}
          multiline={true}
          style={{
            height: 200,
            backgroundColor: 'white',
            borderRadius: 10,
            paddingTop: 15,
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />
      </TalView>
      <TalView className="flex justify-center items-center m-5">
        <AppButton
          title="Apply Now"
          onPress={() => navigation.navigate('ApplyJob')}
        />
      </TalView>
    </TalScrollView>
  );
};

export default UploadCV;
