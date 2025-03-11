import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import io from 'socket.io-client';

// Import existing screens
import SplashScreen from './src/screens/SplashScreen'; 
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginSignupScreen from './src/screens/LoginSignupScreen';
import UserDashboardScreenComponent from './src/screens/USER/UserDashboardScreenComponent';
import ActivityConsole from './src/screens/USER/Activity Module/ActivityConsole';
import PlacesScreen from './src/screens/USER/Activity Module/PlacesScreen'; 
import LearningHub from './src/screens/USER/Learning Module/LearningHub';
import QuickContacts from './src/screens/USER/QuickContacts Module/QuickContacts';
import QuickPhrasesScreen from './src/screens/USER/Activity Module/QuickPhrasesScreen';
import GuardianDashboard from './src/screens/GUARDIAN/GuardianDashboard';
import MonitorProgress from './src/screens/GUARDIAN/MonitorProgress';
import CallPermissionScreen from './src/screens/GUARDIAN/CallPermissionScreen'; 
import PersonalActivitiesScreen from './src/screens/USER/Activity Module/PersonalActivitiesScreen';
import QuickFiresScreen from './src/screens/USER/Activity Module/QuickFiresScreen';
import TopicsScreen from './src/screens/USER/Activity Module/TopicsScreen';
import WordTrackingGame from './src/screens/USER/Learning Module/WordTrackingGame';
import IconQuizGame from './src/screens/USER/Learning Module/IconQuizGame';
import GeminiStoryButton from './src/screens/USER/Learning Module/GeminiStoryButton';
import HeadTrackingOverlay from './src/screens/HeadTrackingOverlay';
import SERVER_CONFIG from './src/screens/config';

const Stack = createStackNavigator();

export default function App() {
  const [isHeadTrackingActive, setIsHeadTrackingActive] = React.useState(false);
  const [headTrackingSocket, setHeadTrackingSocket] = React.useState(null);

  React.useEffect(() => {
    const socket = io(SERVER_CONFIG.SOCKET_URL);
    setHeadTrackingSocket(socket);


    socket.on('tracking_status', (data) => {
      setIsHeadTrackingActive(data.enabled);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleHeadTracking = () => {
    if (headTrackingSocket) {
      if (isHeadTrackingActive) {
        headTrackingSocket.emit('stop_tracking');
      } else {
        headTrackingSocket.emit('start_tracking');
      }
    }
  };

  const HeadTrackingButton = () => (
    <TouchableOpacity 
      style={[
        styles.headTrackingButton, 
        { backgroundColor: isHeadTrackingActive ? 'red' : 'green' }
      ]} 
      onPress={toggleHeadTracking}
    >
      <Text style={styles.headTrackingButtonText}>
        {isHeadTrackingActive ? 'Disable' : 'Enable'} Head Tracking
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffffff',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
            headerTintColor: '#333',
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ 
              headerShown: false,
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ 
              headerShown: false,
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="LoginSignup" 
            component={LoginSignupScreen} 
            options={{ 
              headerShown: false,
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="UserDashboard" 
            component={UserDashboardScreenComponent} 
            options={{ 
              headerShown: false,
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="PlacesScreen" 
            component={PlacesScreen} 
            options={{ 
              title: 'Important Places', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="TopicsScreen" 
            component={TopicsScreen} 
            options={{ 
              title: 'Communication Topics', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="ActivityConsole" 
            component={ActivityConsole} 
            options={{ 
              title: 'Activities',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="LearningHub" 
            component={LearningHub} 
            options={{ 
              title: 'Learning',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="QuickContacts" 
            component={QuickContacts} 
            options={{ 
              title: 'Quick Contacts',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="PersonalActivitiesScreen" 
            component={PersonalActivitiesScreen} 
            options={{ 
              title: 'Personal Activities',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="QuickFiresScreen" 
            component={QuickFiresScreen} 
            options={{ 
              title: 'Quick Fires',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="QuickPhrasesScreen" 
            component={QuickPhrasesScreen} 
            options={{ 
              title: 'Quick Phrases',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="WordTrackingGame" 
            component={WordTrackingGame} 
            options={{ 
              title: 'Word Tracking Game', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="IconQuizGame" 
            component={IconQuizGame} 
            options={{ 
              title: 'Icon Learning Game', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="StoryGame" 
            component={GeminiStoryButton} 
            options={{ 
              title: 'Gemini Story', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="GuardianDashboard" 
            component={GuardianDashboard} 
            options={{ 
              headerShown: false,
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="MonitorProgress" 
            component={MonitorProgress} 
            options={{ 
              title: 'Child Progress', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
          
          <Stack.Screen 
            name="CallPermission" 
            component={CallPermissionScreen} 
            options={{ 
              title: 'Call Permissions', 
              headerTitleAlign: 'center',
              headerRight: () => <HeadTrackingButton />
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>

      {isHeadTrackingActive && headTrackingSocket && (
        <HeadTrackingOverlay 
          socket={headTrackingSocket} 
          onClose={toggleHeadTracking} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headTrackingButton: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  headTrackingButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});