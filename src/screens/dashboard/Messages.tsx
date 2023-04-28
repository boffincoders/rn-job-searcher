import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
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
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <TalView className="px-2 mt-2">
          <InputWithSearchIcon />
          <TalView className="mt-3">
            {messages.map((x, i) => {
              return <MessageItem key={i} data={x} />;
            })}
          </TalView>
        </TalView>
      </ScrollView>
    </TalView>
  );
};

export default Messages;
