import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useRef, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../components/backButton';
import {TalText} from '../../components/TalwindText';
import {TalView} from '../../components/TalwindView';
import RBSheet from 'react-native-raw-bottom-sheet';
const Notifications = () => {
  const navigation: any = useNavigation();
  const TalPressable = styled(Pressable);
  const ref = useRef<RBSheet | null>(null);

  const [bottomSheetList] = useState([
    {
      title: 'Delete',
      icon: require('../../assets/images/delete.png'),
    },
    {
      title: 'Turn off notifications',
      icon: require('../../assets/images/turnOffnoti.png'),
    },
    {
      title: 'Settings',
      icon: require('../../assets/images/settings.png'),
    },
  ]);
  const [listIndex, setListIndex] = useState<number | null>(null);
  return (
    <TalView className="flex-1">
      <RBSheet
        closeOnDragDown={true}
        closeOnPressMask={true}
        ref={ref}
        height={200}
        openDuration={250}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <TalView className="flex-1 justify-center m-8 rounded-tl-xl">
          {bottomSheetList.map((x, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => setListIndex(i)}>
                <TalView
                  key={i}
                  className={`flex rounded-2xl flex-row items-center p-3 ${
                    listIndex === i ? 'bg-primary' : ''
                  }`}>
                  <Image
                    source={x.icon}
                    style={{
                      tintColor:
                        listIndex === i
                          ? 'white'
                          : x.title === 'Settings'
                          ? '#3B4657'
                          : '#3B4657',
                    }}
                  />
                  <TalText
                    className={` ${
                      listIndex === i ? 'text-white' : '#3B4657'
                    } ml-2 text-sm`}>
                    {x.title}
                  </TalText>
                </TalView>
              </TouchableOpacity>
            );
          })}
        </TalView>
      </RBSheet>
      <TalView className="flex flex-row items-center justify-between p-3">
        <BackButton />
        <TalText className="text-secondary text-xs">Read all</TalText>
      </TalView>
      <TalText className="text-primary font-bold text-center text-lg">
        Notifications
      </TalText>
      <ScrollView
        style={{flex: 1, marginBottom: 5}}
        showsVerticalScrollIndicator={false}>
        <TalView>
          <TouchableOpacity
            onPress={event => {
              event.stopPropagation();
              navigation.navigate('NotificationDetails');
            }}>
            <TalView className="bg-white rounded-xl flex flex-row justify-between p-3 mt-8 mx-3">
              <TalView className="flex flex-row">
                <Image source={require('../../assets/images/googlelogo.png')} />
                <TalView className="ml-4">
                  <TalText className="text-primary font-semibold">
                    Application sent
                  </TalText>
                  <TalText className="text-[#524B6B] mt-2 text-xs">
                    Application for Google inc have
                  </TalText>
                  <TalText className="text-[#524B6B] text-xs">
                    entered for company review
                  </TalText>
                  <TalPressable
                    onPress={event => {
                      event.stopPropagation();
                    }}
                    className="flex flex-row  items-center justify-between">
                    <TalView className="bg-primary p-2 rounded-md w-30 mt-3 px-2">
                      <TalText className="text-white text-center text-xs">
                        Application details
                      </TalText>
                    </TalView>
                  </TalPressable>
                </TalView>
              </TalView>

              <TalView className="justify-between items-center">
                <TalPressable onPress={() => ref.current?.open()}>
                  <Image source={require('../../assets/images/menu.png')} />
                </TalPressable>
                <TalText className="text-xs text-[#898989]">25 min</TalText>
              </TalView>
            </TalView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationDetails')}>
            <TalView className="bg-white rounded-xl flex flex-row justify-between p-3 mt-4 mx-3">
              <TalView className="flex flex-1 flex-row">
                <Image source={require('../../assets/images/dribble.png')} />
                <TalView className="flex-1 ml-4">
                  <TalText className="text-primary font-semibold">
                    Your job notification
                  </TalText>
                  <TalText className="text-[#524B6B] mt-2 text-xs">
                    Brandon, there are 10+ new jobs for UI/UX
                  </TalText>
                  <TalText className="text-[#524B6B] text-xs">
                    Designer in California,USA
                  </TalText>
                  <TalView className="flex flex-row  items-center justify-between">
                    <TalView className="bg-primary p-2 rounded-md w-30 mt-3 px-3">
                      <TalText className="text-white text-center text-xs">
                        See new job
                      </TalText>
                    </TalView>
                  </TalView>
                </TalView>
              </TalView>

              <TalView className="justify-between items-center">
                <TalPressable onPress={() => ref.current?.open()}>
                  <Image source={require('../../assets/images/menu.png')} />
                </TalPressable>
                <TalText className="text-xs text-[#898989]">1 hour</TalText>
              </TalView>
            </TalView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationDetails')}>
            <TalView className="bg-white rounded-xl flex flex-row justify-between p-3 mt-4 mx-3">
              <TalView className="flex flex-1 flex-row">
                <Image source={require('../../assets/images/twitter.png')} />
                <TalView className=" flex-1 ml-4">
                  <TalText className="text-primary font-semibold">
                    Notification
                  </TalText>
                  <TalView className="w-60">
                    <TalText className="text-[#524B6B] mt-2 text-xs">
                      Twitter inc is looking for a UI/UX Designer.
                    </TalText>
                    <TalText className="text-[#524B6B] text-xs">
                      Check out this and 9 other job recommendations
                    </TalText>
                  </TalView>
                  <TalView className="flex flex-row  items-center justify-between">
                    <TalView className="bg-primary p-2 rounded-md w-30 mt-3 px-3">
                      <TalText className="text-white text-center text-xs">
                        See job
                      </TalText>
                    </TalView>
                  </TalView>
                </TalView>
              </TalView>

              <TalView className="justify-between items-center">
                <TalPressable onPress={() => ref.current?.open()}>
                  <Image source={require('../../assets/images/menu.png')} />
                </TalPressable>
                <TalText className="text-xs text-[#898989]">6 hour</TalText>
              </TalView>
            </TalView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationDetails')}>
            <TalView className="bg-white rounded-xl flex flex-row justify-between p-3 mt-4 mx-3">
              <TalView className="flex flex-1 flex-row">
                <Image source={require('../../assets/images/facebook.png')} />
                <TalView className=" flex-1 ml-4">
                  <TalText className="text-primary font-semibold">
                    Notification
                  </TalText>
                  <TalView className="w-60">
                    <TalText className="text-[#524B6B] mt-2 text-xs">
                      Check out 5 jobs similar to the
                    </TalText>
                    <TalText className="text-[#524B6B] text-xs">
                      one you saw recently : UI/UX Designer
                    </TalText>
                    <TalText className="text-[#524B6B] text-xs">
                      on Facebook
                    </TalText>
                  </TalView>
                  <TalView className="flex flex-row  items-center justify-between">
                    <TalView className="bg-primary p-2 rounded-md w-30 mt-3 px-3">
                      <TalText className="text-white text-center text-xs">
                        See job
                      </TalText>
                    </TalView>
                  </TalView>
                </TalView>
              </TalView>

              <TalView className="justify-between items-center">
                <TalPressable onPress={() => ref.current?.open()}>
                  <Image source={require('../../assets/images/menu.png')} />
                </TalPressable>
                <TalText className="text-xs text-[#898989]">1 Day</TalText>
              </TalView>
            </TalView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationDetails')}>
            <TalView className="bg-white rounded-xl flex flex-row justify-between p-3 mt-4 mx-3">
              <TalView className="flex flex-1 flex-row">
                <Image source={require('../../assets/images/facebook.png')} />
                <TalView className=" flex-1 ml-4">
                  <TalText className="text-primary font-semibold">
                    Notification
                  </TalText>
                  <TalView className="w-60">
                    <TalText className="text-[#524B6B] mt-2 text-xs">
                      Check out 5 jobs similar to the
                    </TalText>
                    <TalText className="text-[#524B6B] text-xs">
                      one you saw recently : UI/UX Designer
                    </TalText>
                    <TalText className="text-[#524B6B] text-xs">
                      on Facebook
                    </TalText>
                  </TalView>
                  <TalView className="flex flex-row  items-center justify-between">
                    <TalView className="bg-primary p-2 rounded-md w-30 mt-3 px-3">
                      <TalText className="text-white text-center text-xs">
                        See job
                      </TalText>
                    </TalView>
                  </TalView>
                </TalView>
              </TalView>
              <TalView className="justify-between items-center">
                <TalPressable onPress={() => ref.current?.open()}>
                  <Image source={require('../../assets/images/menu.png')} />
                </TalPressable>
                <TalText className="text-xs text-[#898989]">1 Day</TalText>
              </TalView>
            </TalView>
          </TouchableOpacity>
        </TalView>
      </ScrollView>
    </TalView>
  );
};

export default Notifications;
