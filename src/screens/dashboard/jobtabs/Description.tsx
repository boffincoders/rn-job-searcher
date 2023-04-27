import React from 'react';
import {Image} from 'react-native';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';

const Description = () => {
  return (
    <TalView className="p-3 mt-10">
      <TalText className="text-[#150B3D]">Job Description</TalText>
      <TalText className="text-[#524B6B] text-xs mt-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem ...
      </TalText>
      <TalView className="mt-3 bg-[#7551FF] opacity-20 w-1/6 p-1 rounded-md">
        <TalText className="text-black text-center">Read more</TalText>
      </TalView>
      <TalText className="text-primary mt-5">Requirements</TalText>
      <TalView className="mt-5">
        <TalView className="flex flex-row items-center ">
          <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
          <TalText className="ml-3 text-[#524B6B] text-xs">
            Sed ut perspiciatis unde omnis iste natus error sit.
          </TalText>
        </TalView>
        <TalView className="flex flex-row items-center mt-3">
          <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
          <TalText className="ml-3 text-[#524B6B] text-xs">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur & adipisci velit.
          </TalText>
        </TalView>
        <TalView className="flex flex-row items-center mt-3">
          <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
          <TalText className="ml-3 text-[#524B6B] text-xs">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </TalText>
        </TalView>
        <TalView className="flex flex-row items-center mt-3">
          <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
          <TalText className="ml-3 text-[#524B6B] text-xs">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
          </TalText>
        </TalView>
      </TalView>
      <TalView className="mt-3">
        <TalText className="text-primary text-sm font-bold">Location</TalText>
        <TalText className="mt-4 text-xs text-[#524B6B]">
          Overlook Avenue, Belleville, NJ, USA
        </TalText>
        {/* <Image
          // style={{width: 370, height: 200, marginTop: 10}}
          source={{
            uri: 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=icon%3Ahttp%3A%2F%2Fwww.google.com%2Fmapfiles%2Farrow.png%7C30.7046%2C76.7179&zoom=5visible=30.7046v.7179%7C41.469576%2C2.22801&apiKey=AIzaSyDztlrk_3CnzGHo7CFvLFqE_2bUKEq1JEU&key=AIzaSyCKpqPU_-4Iow5OqZ2O6JlRhj9adbhC64g',
          }}
        /> */}
      </TalView>
      <TalView className="w-full mt-4">
        <Image
          style={{width: '100%', borderRadius: 5}}
          source={require('../../../assets/images/Map.png')}
        />
      </TalView>
      <TalText className="text-primary text-sm font-bold mt-3">
        Informations
      </TalText>
      <TalView className="mt-4">
        <TalText className="text-xs text-primary">Position</TalText>
        <TalText className="text-gray-500 text-xs">Senior Designer</TalText>
        <TalView className="border-b-2 border-[#DEE1E7] mt-4" />
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-xs text-primary">Qualification</TalText>
        <TalText className="text-gray-500 text-xs">Bachelor's degree</TalText>
        <TalView className="border-b-2 border-[#DEE1E7] mt-4" />
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-xs text-primary">Experience</TalText>
        <TalText className="text-gray-500 text-xs">3 Years</TalText>
        <TalView className="border-b-2 border-[#DEE1E7] mt-4" />
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-xs text-primary">Job-type</TalText>
        <TalText className="text-gray-500 text-xs">Full-Time</TalText>
        <TalView className="border-b-2 border-[#DEE1E7] mt-4" />
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-xs text-primary">Specialization</TalText>
        <TalText className="text-gray-500 text-xs">Design</TalText>
        <TalView className="border-b-2 border-[#DEE1E7] mt-4" />
      </TalView>
      <TalText className="text-primary text-sm font-bold mt-3">
        Facilities and Others
      </TalText>

      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">Medical</TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">Dental</TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">
          Technical Cartification
        </TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">
          Meal Allowance
        </TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">
          Transport Allowance
        </TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">Regular Hours</TalText>
      </TalView>
      <TalView className="flex flex-row items-center mt-2">
        <TalView className="bg-primary p-0.5 rounded-full w-0.5" />
        <TalText className="ml-3 text-[#524B6B] text-xs">
          Mondays-Fridays
        </TalText>
      </TalView>
    </TalView>
  );
};

export default Description;
