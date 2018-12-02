import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class FlightScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text  style={styles.text}>Do you want an advise at the bearding time?</Text>
                <TextInput
                    placeholder={'Flight code'}
                    placeholderTextColor="#202020"
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('Home')}}
                    title="Accept"

                    accessibilityLabel="Learn more about this purple button"
                />


            </View>
        );
    }
}
const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'green',
        alignItems: 'center',

},
    msg: {
        justifyContent: 'center'
    },
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 20,
        paddingBottom: 5,
        marginEnd: 40,
        marginStart: 40
  },
    input: {
        margin: 15,
        height: 40,
        width:300,
        borderColor: '#fff',
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius:20,
        paddingStart: 20,
    },
});