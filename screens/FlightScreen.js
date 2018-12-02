import React from 'react';
import {
    StyleSheet,
    TextInput,

    Text,
    View,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class FlightScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text rkType={'xlarge'}>Do you want an advise at the bearding time?</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 300,
        justifyContent: 'center',
        backgroundColor: 'green'
}
});