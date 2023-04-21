import React from 'react';
import {Image} from 'react-native';
import {TalText} from '../../../components/TalwindText';
import {TalView} from '../../../components/TalwindView';

const Company = () => {
  return (
    <TalView className="p-3 mt-10">
      <TalText className="text-[#150B3D]">About Company</TalText>
      <TalText className="text-[#524B6B] text-xs mt-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </TalText>
      <TalText className="text-[#524B6B] text-xs mt-4">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas .
      </TalText>
      <TalText className="text-[#524B6B] text-xs mt-4">
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain.
      </TalText>

      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">Website</TalText>
        <TalText className="text-xs text-[#7551FF]">
          https://www.google.com
        </TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">Industry</TalText>
        <TalText className="text-gray-500 text-xs">Internet product</TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">
          Employee size
        </TalText>
        <TalText className="text-gray-500 text-xs">132,121 Employees</TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">
          Head Office
        </TalText>
        <TalText className="text-gray-500 text-xs">
          Mountain View, California, Amerika Serikat
        </TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">Type</TalText>
        <TalText className="text-gray-500 text-xs">
          Multinational company
        </TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">Since</TalText>
        <TalText className="text-gray-500 text-xs">1998</TalText>
      </TalView>
      <TalView className="mt-4">
        <TalText className="text-[#150B3D] font-bold text-xs">
          Specialization
        </TalText>
        <TalText className="text-gray-500 text-xs">
          Search technology, Web computing, Software and Online advertising
        </TalText>

        <TalText className="text-[#150B3D] text-xs mt-4">
          Company Gallery
        </TalText>
        <TalView className="flex flex-row justify-between items-center mt-4 space-x-1">
          <TalView className="w-1/2">
            <Image
              style={{width: 'auto', borderRadius: 5}}
              source={require('../../../assets/images/company.png')}
            />
          </TalView>
          <TalView className="w-1/2 rounded bg-black opacity-50">
            <Image
              style={{width: 'auto', borderRadius: 5}}
              source={require('../../../assets/images/company.png')}
            />
          </TalView>
        </TalView>
      </TalView>
    </TalView>
  );
};

export default Company;
