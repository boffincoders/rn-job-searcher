import React, {useEffect, useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import SignIn from '../../screens/auth/SignIn';
import SignUp from '../../screens/auth/SignUp';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import CheckYourEmail from '../../screens/auth/CheckYourEmail';
import PasswordChangedSuccess from '../../screens/auth/PasswordChangedSuccess';
import Dashboard from '../../screens/dashboard';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import JobDescription from '../../screens/dashboard/JobDescription';
import UploadCV from '../../screens/dashboard/UploadCV';
import ApplyJob from '../../screens/dashboard/ApplyJob';
import Chat from '../../screens/dashboard/Chat';
import Profile from '../../screens/profile';
import AboutMe from '../../screens/profile/AboutMe';
import AddExperience from '../../screens/profile/AddExperience';
import Appreciation from '../../screens/profile/Appreciation';
import Education from '../../screens/profile/Education';
import Language from '../../screens/profile/Language';
import Resume from '../../screens/profile/Resume';
import Skills from '../../screens/profile/Skills';
import Settings from '../../screens/settings';
import UpdatePassword from '../../screens/auth/UpdatePassword';
import {useColorScheme} from 'react-native';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  const theme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {splashScreen ? (
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen
                  name="CheckYourEmail"
                  component={CheckYourEmail}
                />
                <Stack.Screen
                  name="PasswordChangedSuccess"
                  component={PasswordChangedSuccess}
                />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                  name="JobDescriptions"
                  component={JobDescription}
                />
                <Stack.Screen name="UploadCV" component={UploadCV} />
                <Stack.Screen name="ApplyJob" component={ApplyJob} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AboutMe" component={AboutMe} />
                <Stack.Screen
                  name="AddWorkExperience"
                  component={AddExperience}
                />
                <Stack.Screen name="AddAppreciation" component={Appreciation} />
                <Stack.Screen name="AddEducation" component={Education} />
                <Stack.Screen name="AddLanguage" component={Language} />
                <Stack.Screen name="AddResume" component={Resume} />
                <Stack.Screen name="AddSkills" component={Skills} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen
                  name="UpdatePassword"
                  component={UpdatePassword}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Routes;
