import React from 'react';
import {
    StyleSheet,
    TextInput,

    Text,
    View,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class QuestScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text>Quest Screen</Text>

            </View>
        );
    }


}
const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 300,
        justifyContent: 'center'
    }
});