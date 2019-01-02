import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Add friends here!</Text>

                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}

                />
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.addFriends()

                    }
                />
            </View>
        );
    }

    addFriends() {
        this.props.screenProps.addOwnFriend(this.state.text)
        this.props.navigation.navigate('Home')
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