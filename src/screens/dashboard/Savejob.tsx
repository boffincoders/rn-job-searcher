import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Pressable, ScrollView} from 'react-native';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const SaveJobs = () => {
  const [jobs] = useState([
    {
      logo: require('../../assets/images/googlelogo.png'),
      jobtitle: 'UI/UX Designer',
      company: 'Google inc . California , USA',
      type: 'design',
      jobtime: 'Full time',
      designation: 'Senior designer',
      time: '25 minute ago',
      salary: '$15K/Mo',
    },
    {
      logo: require('../../assets/images/dribble.png'),
      jobtitle: 'Lead Designer',
      company: 'Dribble inc . California , USA',
      type: 'design',
      jobtime: 'Full time',
      designation: 'Senior designer',
      time: '25 minute ago',
      salary: '$20K/Mo',
    },
    {
      logo: require('../../assets/images/twitter.png'),
      jobtitle: 'UX Researcher',
      company: 'Twitter inc . California , USA',
      type: 'design',
      jobtime: 'Full time',
      designation: 'Senior designer',
      time: '25 minute ago',
      salary: '$18K/Mo',
    },
  ]);

  return (
    <TalView className="flex flex-1">
      {/* <TalView className="flex w-full flex-row justify-between items-center p-2">
        <TalView />
        <TalText className="text-[#150B3D] font-bold text-lg text-center">
          Save Jobs
        </TalText>
        <TalView>
          <TalText className="text-xs text-[#FF9228]">Delete all</TalText>
        </TalView>
      </TalView> */}
      <ScrollView>
        <TalView className="p-2">
          {jobs.map((x, i) => {
            const splitName = x.salary.split('/');
            return (
              <TalView key={i} className="bg-white rounded-2xl p-4 mt-2">
                <TalView className="flex flex-row justify-between items-center">
                  <Image source={x.logo} />
                  <Pressable>
                    <Image source={require('../../assets/images/menu.png')} />
                  </Pressable>
                </TalView>
                <TalText className="text-primary text-md font-semibold mt-2">
                  {x.jobtitle}
                </TalText>
                <TalText className="text-[#524B6B] text-sm mt-2">
                  {x.company}
                </TalText>
                <TalView className="flex flex-row items-center justify-between mt-3">
                  <TalView className="bg-[#CBC9D4] p-2 rounded-lg">
                    <TalText className="text-center text-[#524B6B] text-xs">
                      {x.type}
                    </TalText>
                  </TalView>
                  <TalView className="bg-[#CBC9D4] p-2 rounded-lg">
                    <TalText className="text-center text-[#524B6B] text-xs">
                      {x.jobtime}
                    </TalText>
                  </TalView>
                  <TalView className="bg-[#CBC9D4] p-2 rounded-lg">
                    <TalText className="text-center text-[#524B6B] text-xs">
                      {x.designation}
                    </TalText>
                  </TalView>
                </TalView>
                <TalView className="mt-4 flex flex-row justify-between">
                  <TalText className="text-xs text-[#AAA6B9]">{x.time}</TalText>
                  <TalView className="flex flex-row">
                    <TalText className="text-primary font-bold">
                      {splitName[0]}
                    </TalText>
                    <TalText>/</TalText>
                    <TalText className="text-[#AAA6B9] text-xs">
                      {splitName[1]}
                    </TalText>
                  </TalView>
                </TalView>
              </TalView>
            );
          })}
        </TalView>
      </ScrollView>
    </TalView>
  );
};

export default SaveJobs;
