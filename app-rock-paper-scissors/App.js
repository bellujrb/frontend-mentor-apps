import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

import HomeController from './src/Screens/Home/HomeController'
import PlayingController from './src/Screens/Playing/PlayingController'

import { GamerContextProvider } from './src/Global/GamerContext'

const Stack = createStackNavigator();

export default function App(){
    return (
        <GamerContextProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='GAME' component={HomeController}
                    options={{
                        headerShown: false
                    }}
                    />
                    <Stack.Screen name='PLAYING' component={PlayingController}
                    options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </GamerContextProvider>
    );
}