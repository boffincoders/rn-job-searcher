import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [splashScreen, setSplashScreen] = useState<boolean>(true);

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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Routes;
