import React from 'react';
import {
    StyleSheet,
    Text, TextInput,
    View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RkButton, RkText } from "react-native-ui-kitten";


export default class Quest3Screen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text style={styles.titleText}>FINNAIR: Promotional quest</Text>
                <Text style={styles.descriptionText}>Take a photo on the airport and share it on social networks with #finnair and the code #gi43b3r. You will enter the contest for the best photo, winners will be announced next week</Text>
                <Text style={styles.rewardsText}>100 AirCoins</Text>
                <View style={styles.rowContainer}>
                    <RkButton
                        style={styles.finalizeButton}
                        onPress={null}>
                        <RkText>Finalize</RkText>
                    </RkButton>
                    <RkButton
                        style={styles.skipButton}
                        onPress={null}>
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
        paddingTop: 40,
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
        paddingTop: 10,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    finalizeButton: {
        marginLeft: -10
    },
    skipButton: {
        marginLeft: 10
    }
});