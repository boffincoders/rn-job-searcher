import React from 'react';
import {Image} from 'react-native';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
interface IJob {
  splitPackage: string[];
  title: string;
  position: string;
  company: string;
  location: string;
  timing: string;
}
const Job = (props: IJob) => {
  const {company, location, position, splitPackage, timing, title} = props;
  return (
    <TalView className="bg-white shadow-md p-5 mt-5 rounded-xl mb-2">
      <TalView className="flex flex-row justify-between items-center">
        <TalView className="flex flex-row items-center">
          <TalView className="rounded-full bg-[#D6CDFE] p-2">
            <Image source={require('../../assets/images/apple.png')} />
          </TalView>
          <TalView className="ml-2">
            <TalText className="text-primary font-bold">{title}</TalText>
            <TalText className="text-[#524B6B]  text-xs">
              {company}. {location}
            </TalText>
          </TalView>
        </TalView>
        <TalView>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/images/draft.png')}
          />
        </TalView>
      </TalView>
      <TalView className="mt-4 flex flex-row">
        <TalText className="text-primary font-bold">{splitPackage[0]}</TalText>
        <TalText>/</TalText>
        <TalText className="text-[#AAA6B9] text-xs">{splitPackage[1]}</TalText>
      </TalView>
      <TalView className="flex flex-row justify-between items-center mt-4">
        <TalView className="bg-[#CBC9D4] p-1.5  rounded-xl">
          <TalText className="text-[#524B6B] text-xs">{position}</TalText>
        </TalView>
        <TalView className="bg-[#CBC9D4] p-1.5 rounded-xl">
          <TalText className="text-[#524B6B] text-xs">{timing}</TalText>
        </TalView>
        <TalView className="bg-[#FF6B2C] p-1.5 rounded-xl opacity-20">
          <TalText className="text-primary text-xs">Apply</TalText>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Job;
