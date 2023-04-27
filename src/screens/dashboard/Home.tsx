import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import Job from './Job';
const Home = () => {
  const navigation: any = useNavigation();
  const [jobs] = useState([
    {
      title: 'Product Designer',
      company: 'Google inc',
      location: 'California, USA',
      package: '$15k/Mo',
      position: 'Senior designer',
      timing: 'Full time',
    },
    {
      title: 'Product Designer',
      company: 'Google inc',
      location: 'California, USA',
      package: '$15k/Mo',
      position: 'Senior designer',
      timing: 'Full time',
    },
    {
      title: 'Product Designer',
      company: 'Google inc',
      location: 'California, USA',
      package: '$15k/Mo',
      position: 'Senior designer',
      timing: 'Full time',
    },
    {
      title: 'Product Designer',
      company: 'Google inc',
      location: 'California, USA',
      package: '$15k/Mo',
      position: 'Senior designer',
      timing: 'Full time',
    },
  ]);
  return (
    <ScrollView>
      <TalView className="flex flex-1 px-4">
        <TalView className="flex justify-between items-center flex-row p-3 font-bold">
          <TalView>
            <TalText className="text-primary text-xl font-semibold">
              Hello
            </TalText>
            <TalText className="text-primary text-xl font-semibold">
              Orlando Diggs.
            </TalText>
          </TalView>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{height: 30, width: 30, borderRadius: 50}}
            />
          </TouchableOpacity>
        </TalView>
        <TalView className=" bg-primary rounded flex flex-row justify-between items-center px-6">
          <TalView className="hidden md:flex">
            <TalText className="sm:text-xs text-white text-2xl">
              50% off
            </TalText>
            <TalText className="sm:text-xs text-white text-lg">
              take any courses
            </TalText>
            <TalView className="bg-[#FF9228] rounded-lg p-2 mt-3">
              <TalText className="text-center sm:text-xs text-white">
                Join now
              </TalText>
            </TalView>
          </TalView>
          <Image
            style={{
              position: 'relative',
              zIndex: 1,
            }}
            source={require('../../assets/images/discounthome.png')}
          />
        </TalView>
        <TalText className="text-black mt-4 font-bold">Find Your job</TalText>
        <TalView className="gap-3 mt-1 flex flex-row items-center overflow-hidden">
          <TalView className="py-10 flex flex-1 items-center bg-[#AFECFE] rounded">
            <Image source={require('../../assets/images/findjobs.png')} />
            <TalText className="text-black font-bold mt-2">44.5k</TalText>
            <TalText>Remote Job</TalText>
          </TalView>
          <TalView className="flex flex-1 space-y-2">
            <TalView className="flex-1 bg-[#BEAFFE] justify-center items-center rounded">
              <TalText className="text-black font-bold mt-2">66.8k</TalText>
              <TalText>Full Time</TalText>
            </TalView>
            <TalView className="flex-1 bg-[#FFD6AD] justify-center items-center rounded">
              <TalText className="text-black font-bold mt-2">38.9k</TalText>
              <TalText>Part Time</TalText>
            </TalView>
          </TalView>
        </TalView>
        <TalText className="text-black mt-4 font-bold">Recent Job List</TalText>
        {jobs.map((x, index) => {
          const splitPackage = x.package.split('/');
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('JobDescriptions')}>
              <Job
                splitPackage={splitPackage}
                title={x.title}
                position={x.position}
                company={x.company}
                location={x.location}
                timing={x.timing}
              />
            </Pressable>
          );
        })}
      </TalView>
    </ScrollView>
  );
};

export default Home;
