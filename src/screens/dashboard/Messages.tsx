import React, {useState} from 'react';
import {Image, ScrollView, TextInput} from 'react-native';
import InputWithSearchIcon from '../../components/InputWithSearchIcon';
import MessageItem from '../../components/messageItem';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
const Messages = () => {
  const [messages] = useState([
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },

    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
    {
      user: 'Andy Robertson',
      pic: require('../../assets/images/messagepic.png'),
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
    },
  ]);
  return (
    <TalView className="flex-1">
      {/* <TalView className="flex w-full flex-row items-center"> */}
      <TalText className="text-black font-bold text-lg text-center">
        Messages
      </TalText>
      <TalView className="flex flex-row self-end">
        <Image source={require('../../assets/images/edit.png')} />
        <Image
          style={{marginLeft: 15}}
          source={require('../../assets/images/menu.png')}
        />
      </TalView>
      {/* </TalView> */}
      <InputWithSearchIcon clear={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {messages.map((x, i) => {
          return <MessageItem key={i} data={x} />;
        })}
      </ScrollView>
    </TalView>
  );
};

export default Messages;
