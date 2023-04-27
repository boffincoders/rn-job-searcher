import React, {useState} from 'react';
import {Image} from 'react-native';
import BackButton from '../../../components/backButton';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';
import Post from './post';

const Posts = () => {
  const [posts] = useState([
    {
      user: 'Arnold Leonardo',
      title: 'What are the characteristics of a fake job call form?',
      time: '21 minuts ago',
      content:
        'Because I always find fake job calls so I ,m confused which job to take can you share your knowledge here? thank you',
      likes: '12',
      comments: '10',
      shares: '2',
    },
    {
      user: 'Arnold Leonardo',
      title: 'What are the characteristics of a fake job call form?',
      time: '21 minuts ago',
      content:
        'Because I always find fake job calls so I ,m confused which job to take can you share your knowledge here? thank you',
      likes: '12',
      comments: '10',
      shares: '2',
    },
    {
      user: 'Arnold Leonardo',
      title: 'What are the characteristics of a fake job call form?',
      time: '21 minuts ago',
      content:
        'Because I always find fake job calls so I ,m confused which job to take can you share your knowledge here? thank you',
      likes: '12',
      comments: '10',
      shares: '2',
    },
  ]);
  return (
    <TalView className="p-3">
      <BackButton />
      {posts.map((x, index) => {
        return <Post key={index} data={x} />;
      })}
    </TalView>
  );
};

export default Posts;
