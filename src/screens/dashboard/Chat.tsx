import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, TextInput} from 'react-native';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Chat = () => {
  const navigation = useNavigation();
  return (
    <TalView className="flex-1">
      <TalView className="bg-white py-5">
        <TalView className="flex flex-row justify-between items-center p-2">
          <BackButton />
          <Image source={require('../../assets/images/menu.png')} />
        </TalView>
        <TalView className="flex flex-row items-center justify-between p-2">
          <TalView className="flex flex-row">
            <Image
              style={{height: 40, width: 40, borderRadius: 50}}
              source={require('../../assets/images/profile.png')}
            />
            <TalView className="ml-2">
              <TalText className="text-[#101828] font-semibold">
                Orlando Diggs
              </TalText>
              <TalView className="flex flex-row items-center">
                <TalView className="bg-[#4EC133] p-1 w-0.2 rounded" />
                <TalText className="text-xs ml-1">Online</TalText>
              </TalView>
            </TalView>
          </TalView>
          <TalView className="flex flex-row items-center">
            <Image source={require('../../assets/images/call.png')} />
            <Image
              style={{marginLeft: 10}}
              source={require('../../assets/images/chatSearch.png')}
            />
          </TalView>
        </TalView>
      </TalView>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <TalView className="p-3">
          <TalText className="text-center text-xs text-[#AAA6B9]">
            Today
          </TalText>
          <TalView className="self-end">
            <TalView className="bg-primary rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3.5 w-1/2  flex mt-3">
              <TalText className="text-white text-sm">
                Hello sir, Good Morning
              </TalText>
            </TalView>
            <TalView className="self-end flex flex-row mt-1 items-center">
              <TalText className="text-[#AAA6B9] text-[10px]">09:30 am</TalText>
              <Image
                style={{marginTop: 2, marginLeft: 4}}
                source={require('../../assets/images/seen.png')}
              />
            </TalView>
          </TalView>
          <TalView className="flex flex-row items-center mt-4">
            <Image
              style={{height: 30, width: 30, borderRadius: 50}}
              source={require('../../assets/images/profile.png')}
            />
            <TalView className="w-1/2">
              <TalView className="bg-[#fff2d1]  rounded-tl-xl p-3 rounded-tr-xl rounded-br-xl  flex  ml-2">
                <TalText className="text-[#524B6B]  text-sm">
                  Morning, Can i help you ?
                </TalText>
              </TalView>
              <TalText className="text-[#AAA6B9] text-[10px] ml-2 mt-2">
                09:30 am
              </TalText>
            </TalView>
          </TalView>
          <TalView className="self-end">
            <TalView className="bg-primary rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3.5 w-1/2  flex mt-3">
              <TalText className="text-white text-sm">
                I saw the UI/UX Designer vacancy that you uploaded on linkedin
                yesterday and I am interested in joining your company.
              </TalText>
            </TalView>
            <TalView className="self-end flex flex-row mt-1 items-center">
              <TalText className="text-[#AAA6B9] text-[10px]">09:30 am</TalText>
              <Image
                style={{marginTop: 2, marginLeft: 4}}
                source={require('../../assets/images/seen.png')}
              />
            </TalView>
          </TalView>
          <TalView className="flex flex-row items-center mt-4">
            <Image
              style={{height: 30, width: 30, borderRadius: 50}}
              source={require('../../assets/images/profile.png')}
            />
            <TalView className="w-1/2 ">
              <TalView className="bg-[#fff2d1]  rounded-tl-xl p-3 rounded-tr-xl rounded-br-xl  flex  ml-2">
                <TalText className="text-[#524B6B]  text-sm">
                  Oh yes, please send your CV/Resume here
                </TalText>
              </TalView>
              <TalText className="text-[#AAA6B9] text-[10px] ml-2 mt-2">
                09:30 am
              </TalText>
            </TalView>
          </TalView>
          <TalView className="self-end">
            <TalView className="bg-primary rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3.5 w-1/2   mt-3 flex flex-row items-center justify-between">
              <Image source={require('../../assets/images/PDF.png')} />
              <TalView className="flex ml-3">
                <TalText className="text-white text-xs">
                  Jamet- CV - UI/UX Designer.PDF
                </TalText>
                <TalText className="text-[#D0DBE0] text-[10px]">
                  867 Kb PDF
                </TalText>
              </TalView>
              <Image
                style={{tintColor: 'white', marginLeft: 3}}
                source={require('../../assets/images/menu.png')}
              />
            </TalView>
            <TalView className="self-end flex flex-row mt-1 items-center">
              <TalText className="text-[#AAA6B9] text-[10px]">09:30 am</TalText>
              <Image
                style={{marginTop: 2, marginLeft: 4}}
                source={require('../../assets/images/seen.png')}
              />
            </TalView>
          </TalView>
        </TalView>
      </ScrollView>
      <TalView className="flex flex-row items-center m-2 justify-between">
        <TalView className="flex flex-row bg-white p-3 rounded-2xl m-2 ">
          <Image source={require('../../assets/images/attachment.png')} />
          <TextInput
            placeholder="Write your message"
            style={{
              backgroundColor: 'white',
              padding: 3,
              width: '80%',
            }}
          />
        </TalView>
        <TalView className="bg-primary text-center p-3 rounded-lg">
          <Image source={require('../../assets/images/send.png')} />
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Chat;
