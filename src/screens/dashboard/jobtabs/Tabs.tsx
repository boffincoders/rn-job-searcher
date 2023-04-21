import {styled} from 'nativewind';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';

const Tabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: string[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const TalTouchableOpacity = styled(TouchableOpacity);
  return (
    <TalView className="flex flex-row justify-around items-center mt-2 p-2 space-x-3">
      {tabs.map((x, i) => {
        const backgroundColor =
          selectedTab === i ? 'bg-primary' : 'bg-[#D6CDFE]';
        const textColor = selectedTab === i ? 'text-white' : 'text-primary';
        return (
          <TalTouchableOpacity
            key={i}
            className={`w-1/2 ${backgroundColor} p-2  rounded`}
            onPress={() => setSelectedTab(i)}>
            <TalView>
              <TalText className={`text-center font-bold ${textColor}`}>
                {x}
              </TalText>
            </TalView>
          </TalTouchableOpacity>
        );
      })}
    </TalView>
  );
};

export default Tabs;
