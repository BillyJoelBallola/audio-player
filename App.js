import { useFonts } from 'expo-font';
import BottomTabNavigation from './src/navigation/ButtomTabNavigation';
import { SoundContextProvider } from './src/context/SoundContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Onboarding from './src/screen/Onboarding';
import Player from './src/screen/Player';
import { useCallback } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
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
