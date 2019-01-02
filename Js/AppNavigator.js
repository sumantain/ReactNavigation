import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Friends from './Friends';
import AddFriend from './AddFriend';

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Friends: {screen: Friends},
    AddFriend: {screen: AddFriend},
});

export default createAppContainer(AppNavigator);