import React from 'react';
import {Image} from 'react-native';
import {TalText} from '../../../../components/TalwindText';
import {TalView} from '../../../../components/TalwindView';
interface IPosts {
  title: string;
  time: string;
  content: string;
  likes: string;
  user: string;
  comments: string;
  shares: string;
}
const Post = (data: {data: IPosts}) => {
  return (
    <>
      <TalView className="w-full bg-white  mt-4 rounded-2xl">
        <TalView className=" flex flex-1 p-6">
          <TalView>
            <TalView className="flex flex-row items-center">
              <Image source={require('../../../../assets/images/user.png')} />
              <TalView className="ml-2 flex justify-between">
                <TalText className="text-primary font-semibold">
                  {data.data.user}
                </TalText>
                <TalView className="flex flex-row items-center  mt-1">
                  <Image
                    source={require('../../../../assets/images/clock.png')}
                  />
                  <TalText className="ml-2 text-xs text-[#AAA6B9]">
                    {data.data.time}
                  </TalText>
                </TalView>
              </TalView>
            </TalView>
            <TalText className="text-primary mt-4 text-sm font-semibold">
              {data.data.title}
            </TalText>
            <TalText className="text-[#524B6B] text-xs mt-3">
              {data.data.content}
            </TalText>
            {/* <TalView className="mt-10"> */}
          </TalView>
        </TalView>
        <TalView className="bg-[#e7e2fa] justify-between rounded-b-2xl p-5 mt-auto flex flex-row items-center">
          <TalView className="flex flex-row items-center justify-center z-10">
            <TalView className="flex flex-row items-center">
              <Image source={require('../../../../assets/images/like.png')} />
              <TalText className="text-[#6F6B80] ml-1 text-xs">
                {data.data.likes}
              </TalText>
            </TalView>
            <TalView className="flex flex-row items-center ml-3">
              <Image
                style={{height: 18, width: 18}}
                source={require('../../../../assets/images/comment.png')}
              />
              <TalText className="text-[#6F6B80] ml-1 text-xs">
                {data.data.comments}
              </TalText>
            </TalView>
          </TalView>
          <TalView className="flex flex-row items-center">
            <Image
              style={{height: 20, width: 20}}
              source={require('../../../../assets/images/share.png')}
            />
            <TalText className="text-[#6F6B80] ml-1 text-xs">
              {data.data.shares}
            </TalText>
          </TalView>
        </TalView>
      </TalView>
    </>
  );
};

export default Post;
