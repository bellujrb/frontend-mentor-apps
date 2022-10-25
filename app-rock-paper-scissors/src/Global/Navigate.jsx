import React from 'react'
import HomeController from '../Screens/Home/HomeController'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

    export default function Navigate () {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeController" component={HomeController}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}