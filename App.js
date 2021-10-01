import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Checkout, Tracking, Login, Cadastro, Profile, EditUser } from './src/pages/Index';
import Menu from './src/components/Menu';
const Stack = createStackNavigator();

export default function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
                <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                <Stack.Screen name="Tracking" component={Tracking} options={{ headerShown: false }} />
                <Stack.Screen name="Edit" component={EditUser} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}