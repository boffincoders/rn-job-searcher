import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';
interface IAddSkillsProps {
  title: string;
  icon: any;
}
const AddSkills = (data: {data: IAddSkillsProps}) => {
  const navigation: any = useNavigation();
  const OpenAddScreen = () => {
    switch (data.data.title) {
      case 'About me':
        return navigation.navigate('AboutMe');
      case 'Work experience':
        return navigation.navigate('AddWorkExperience');
      case 'Skill':
        return navigation.navigate('AddSkills');
      case 'Language':
        return navigation.navigate('AddLanguage');
      case 'Appreciation':
        return navigation.navigate('AddAppreciation');
      case 'Resume':
        return navigation.navigate('AddResume');
      default:
        return '';
    }
  };
  return (
    <TalView className="bg-white rounded-xl p-5 flex flex-row items-center justify-between m-2">
      <TalView className="flex flex-row items-center">
        <Image source={data.data.icon} />
        <TalText className="text-primary font-semibold ml-2">
          {data.data.title}
        </TalText>
      </TalView>
      <TouchableOpacity onPress={OpenAddScreen}>
        <Image source={require('../../../assets/images/addSkills.png')} />
      </TouchableOpacity>
    </TalView>
  );
};

export default AddSkills;
