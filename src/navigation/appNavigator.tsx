import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens Importing
import SplashScreen from '../screens/Splash/index';
import SocialMediaFeed from '../screens/Feeds/index';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SocialMediaFeed" component={SocialMediaFeed} />
    </Stack.Navigator>
  );
}

export default () => <AppNavigator />;
