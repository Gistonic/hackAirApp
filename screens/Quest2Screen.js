import React from 'react';
import {
    StyleSheet,
    Text, TextInput,
    View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RkButton, RkText } from "react-native-ui-kitten";


export default class Quest2Screen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text style={styles.titleText}>Find your travel partners</Text>
                <Text style={styles.descriptionText}>Find another passenger from your flight and ask him for the code</Text>
                <Text style={styles.rewardsText}>25 AirCoins</Text>
                <TextInput
                    placeholder={'Password'}
                    placeholderTextColor="#202020"
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <View style={styles.rowContainer}>
                    <RkButton
                        style={styles.finalizeButton}
                        onPress={() => {this.props.navigation.navigate('Quest3')}}>
                        <RkText>Finalize</RkText>
                    </RkButton>
                    <RkButton
                        style={styles.skipButton}
                        onPress={() => {this.props.navigation.navigate('Quest3')}}>
                        <RkText>Skip</RkText>
                    </RkButton>
                </View>

            </View>
        );
    }


}
const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 150,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 18,
        paddingTop: 10,
        textAlign: 'center'
    },
    rewardsText: {
        paddingTop: 10,
        textAlign: 'center'
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
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 40

    },
    finalizeButton: {
        marginLeft: -10
    },
    skipButton: {
        marginLeft: 10
    }
});