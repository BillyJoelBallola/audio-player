import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from "react";

import Player from './src/screen/Player';
import Onboarding from './src/screen/Onboarding';
import BottomTabNavigation from './src/navigation/ButtomTabNavigation';
import { SoundContextProvider } from './src/context/SoundContext';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    regular: require('./src/assets/fonts/regular.otf'),
    medium: require('./src/assets/fonts/medium.otf'),
    bold: require('./src/assets/fonts/bold.otf'),
    light: require('./src/assets/fonts/light.otf'),
    xtrabold: require('./src/assets/fonts/xtrabold.otf'),
  });
  
  useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <SoundContextProvider>   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown: false}} />
          <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown: false}} />
          <Stack.Screen name='Player' component={Player} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SoundContextProvider>
  );
}
