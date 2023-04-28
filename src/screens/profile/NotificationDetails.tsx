import React from 'react';
import {Image} from 'react-native';
import AppButton from '../../components/AppButton';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const NotificationDetails = () => {
  return (
    <TalView className="flex-1 p-4">
      <BackButton />
      <TalView className="mt-5">
        <TalText className="text-primary font-bold text-center text-lg">
          Your application
        </TalText>

        <TalView className="bg-white rounded-lg p-3 mt-4">
          <Image source={require('../../assets/images/googlelogo.png')} />
          <TalText className="text-md text-primary font-semibold mt-3">
            UI/UX Designer
          </TalText>
          <TalText className="text-primary text-xs  mt-3">
            Google inc . California, USA
          </TalText>

          <TalText className="text-xs text-[#524B6B] mt-3">
            Shipped on February 14, 2022 at 11:30 am
          </TalText>
          <TalText className="text-xs text-[#524B6B] mt-3">
            Updated by recruiter 8 hours ago
          </TalText>

          <TalView className="mt-3">
            <TalText className="text-md text-primary font-semibold mt-3">
              Job details
            </TalText>
            <TalText className="text-xs text-[#524B6B] mt-3">
              Senior designer
            </TalText>
            <TalText className="text-xs text-[#524B6B] mt-3">Full time</TalText>
            <TalText className="text-xs text-[#524B6B] mt-3">
              1-3 Years work experience
            </TalText>
          </TalView>
          <TalView className="mt-3">
            <TalText className="text-md text-primary font-semibold">
              Application details
            </TalText>
            <TalText className="text-xs text-[#524B6B] mt-3">CV/Resume</TalText>
            <TalView className="bg-[#9D97B5] rounded-md p-3.5 mt-3 flex flex-row items-center">
              <Image source={require('../../assets/images/PDF.png')} />
              <TalView className="flex ml-3">
                <TalText className="text-white text-xs">
                  Jamet- CV - UI/UX Designer.PDF
                </TalText>
                <TalText className="text-[#D0DBE0] text-[10px]">
                  867 Kb PDF 14 Feb 2022 at 11:30 am
                </TalText>
              </TalView>
            </TalView>
          </TalView>
        </TalView>

        <TalView className=" mt-4 justify-center items-center">
          <AppButton title="Apply for more jobs" />
        </TalView>
      </TalView>
    </TalView>
  );
};

export default NotificationDetails;
