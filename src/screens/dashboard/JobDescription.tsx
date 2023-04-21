import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import AppButton from '../../components/AppButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import Company from './jobtabs/Company';
import Description from './jobtabs/Description';
import Header from './jobtabs/Header';
import Tabs from './jobtabs/Tabs';
const TailScrollView = styled(ScrollView);
const JobDescription = () => {
  const [tabs] = useState<string[]>(['Description', 'Company']);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const navigation: any = useNavigation();
  return (
    <TailScrollView
      className="flex flex-1 bg-[#E5E5E5]"
      showsVerticalScrollIndicator={false}>
      <Header />
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 0 ? <Description /> : <Company />}
      <TalView className="flex justify-center items-center m-5">
        <AppButton
          title="Apply Now"
          onPress={() => navigation.navigate('UploadCV')}
        />
      </TalView>
    </TailScrollView>
  );
};

export default JobDescription;
