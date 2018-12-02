import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RkButton, RkText } from "react-native-ui-kitten";


export default class QuestScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.questsContainer}>
                <Text style={styles.titleText}>Quest title</Text>
                <Text style={styles.descriptionText}>Quest description</Text>
                <Text style={styles.rewardsText}>Rewards</Text>
                <RkButton
                    style={styles.button}
                    onPress={null}>
                    <RkText>Finalize</RkText>
                </RkButton>

            </View>
        );
    }


}
const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 40,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 15,
        paddingTop: 10,
        textAlign: 'justify'
    },
    rewardsText: {
        paddingTop: 10,
        textAlign: 'center'
    }
});