import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import GuardianScreen from '../screens/GuardianScreen';
import ManageActivitiesScreen from '../screens/ManageActivitiesScreen';
import LearningScreen from '../screens/LearningScreen';
import QuickContactsScreen from '../screens/QuickContactsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Guardian" component={GuardianScreen} />
        <Stack.Screen name="ManageActivities" component={ManageActivitiesScreen} />
        <Stack.Screen name="Learning" component={LearningScreen} />
        <Stack.Screen name="QuickContacts" component={QuickContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
