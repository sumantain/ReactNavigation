import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Home extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>We have { this.props.screenProps.currentFriends.length } friends!</Text>
                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Friends')
                    }
                />
                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('AddFriend')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});