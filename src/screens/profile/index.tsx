import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import AddSkills from './addSkillCard';

const Profile = () => {
  const navigation: any = useNavigation();
  const [profile] = useState([
    {
      title: 'About me',
      icon: require('../../assets/images/userIcon.png'),
    },
    {
      title: 'Work experience',
      icon: require('../../assets/images/work.png'),
    },
    {
      title: 'Skill',
      icon: require('../../assets/images/skills.png'),
    },
    {
      title: 'Language',
      icon: require('../../assets/images/language.png'),
    },
    {
      title: 'Appreciation',
      icon: require('../../assets/images/appre.png'),
    },
    {
      title: 'Resume',
      icon: require('../../assets/images/resume.png'),
    },
  ]);

  const ref = useRef<any>(null);
  return (
    <ScrollView>
      <TalView className="flex-1">
        <TalView>
          <ImageBackground
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 15,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require('../../assets/images/headBack.png')}
            resizeMode="cover">
            <TalView className="flex flex-row justify-between items-center">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{tintColor: 'white'}}
                  source={require('../../assets/images/arrow.png')}
                />
              </TouchableOpacity>
              <TalView className="w-1/4 flex flex-row justify-around">
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}>
                  <Image
                    source={require('../../assets/images/notificationIcon.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{tintColor: 'white'}}
                  source={require('../../assets/images/share.png')}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Settings')}>
                  <Image source={require('../../assets/images/settings.png')} />
                </TouchableOpacity>
              </TalView>
            </TalView>
            <TalView className="mt-1">
              <Image
                source={require('../../assets/images/profile.png')}
                style={{height: 40, width: 40, borderRadius: 50}}
              />
              <TalText className="mt-2 text-sm font-bold-sm text-white">
                Orlando Diggs
              </TalText>
              <TalText className="mt-2 text-xs text-white">
                California, USA
              </TalText>
            </TalView>
            <TalView className="flex flex-row justify-between items-center mt-3 mb-4 ml-1 ">
              <TalView className="flex flex-row justify-between items-center">
                <TalText className="text-white font-bold text-xs">120K</TalText>
                <TalText className="text-white text-xs ml-1">Follower</TalText>
              </TalView>
              <TalView className="flex flex-row justify-between items-center">
                <TalText className="text-white font-bold text-xs">23k</TalText>
                <TalText className="text-white text-xs ml-1">Following</TalText>
              </TalView>
              <TalView className=" bg-[#30226B] rounded p-1 flex flex-row justify-between items-center">
                <TalText className="text-white text-xs">Edit profile</TalText>
                <Image
                  style={{marginLeft: 5}}
                  source={require('../../assets/images/editwhite.png')}
                />
              </TalView>
            </TalView>
          </ImageBackground>
        </TalView>
        <TalView className="px-3">
          {profile.map((x, i) => {
            return <AddSkills data={x} key={i} />;
          })}
        </TalView>
      </TalView>
    </ScrollView>
  );
};

export default Profile;
