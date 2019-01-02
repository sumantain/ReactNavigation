/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './Js/AppNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            possibleFriends: [
                'Allie',
                'Gator',
                'Lizzie',
            ],
            currentFriends: [],
        }
    }

    addFriend = (index) => {
        const {
            currentFriends,
            possibleFriends,
        } = this.state

        // Pull friend out of possibleFriends
        const addedFriend = possibleFriends.splice(index, 1)

        // And put friend in currentFriends
        currentFriends.push(addedFriend)

        // Finally, update our app state
        this.setState({
            currentFriends,
            possibleFriends,
        })
    };
    addOwnFriend = (name) =>{
        const {
            currentFriends,
            possibleFriends,
        } = this.state;

        currentFriends.push(name);
        this.setState({
            currentFriends,
            possibleFriends,
        })
    }


    render() {
    return (
      <AppNavigator
          screenProps={ {
              currentFriends: this.state.currentFriends,
              possibleFriends: this.state.possibleFriends,
              addFriend: this.addFriend,
              addOwnFriend:this.addOwnFriend,
          } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
