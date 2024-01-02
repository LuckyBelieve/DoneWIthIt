import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = ()=>(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,}} name='Account' component={AccountScreen}/>
        <Stack.Screen  options={{}} name='Messages' component={MessagesScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;