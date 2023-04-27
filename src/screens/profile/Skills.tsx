import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import BackButton from '../../components/backButton';
import InputWithSearchIcon from '../../components/InputWithSearchIcon';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Skills = () => {
  const [skills, setSkills] = useState([
    'Leadership',
    'Teamwork',
    'Good communications skills',
    'Consistent',
    'Web design',
    'Problem solver',
    'UI/UX Design',
    'Adobe Design',
    'Web Design',
    'Graphic Design',
  ]);
  return (
    <TalView className="flex-1">
      <TalView className="p-2">
        <BackButton />
        <TalText className="text-primary font-bold text-lg mt-5">
          Add Skills
        </TalText>
        <TalView className="mt-3">
          <InputWithSearchIcon clear={true} />
          <ScrollView>
            {skills.map((x, i) => {
              return (
                <TouchableOpacity key={i}>
                  <TalText className="text-[#524B6B] text-sm m-5">{x}</TalText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Skills;
