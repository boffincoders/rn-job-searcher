import {useNavigation, useNavigationState} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {TalText} from '../TalwindText';
import {TalView} from '../TalwindView';

const MessageItem = (data: {
  data: {user: string; pic: any; message: string; time: string};
}) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <TalView className="flex flex-row justify-between items-center m-3">
        <TalView className="flex flex-row">
          <Image source={data.data.pic} />
          <TalView className="ml-2">
            <TalText className="font-bold">{data.data.user}</TalText>
            <TalText className="text-xs mt-1">{data.data.message}</TalText>
          </TalView>
        </TalView>
        <TalText className="text-[#AAA6B9] text-xs">{data.data.time}</TalText>
      </TalView>
    </TouchableOpacity>
  );
};

export default MessageItem;
