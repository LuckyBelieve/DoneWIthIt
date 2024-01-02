import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = ()=>(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,}} name='ListingScreen' component={ListingsScreen}/>
        <Stack.Screen  options={{}} name='ListingDetails' component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;