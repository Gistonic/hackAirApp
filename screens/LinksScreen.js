import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import {
    RkText,
    RkButton, RkStyleSheet,
} from 'react-native-ui-kitten';
import { Avatar } from './../components/avatar';
import { Gallery } from './../components/gallery';
import { data } from './../data/';
import formatNumber from './../utils/textUtils';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    state = {
        data: undefined,
    };

    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', 1);
        this.state.data = data.getUser(id);
    }

    render = () => (
        <ScrollView style={styles.root}>
            <View style={[styles.header, styles.bordered]}>
                <Avatar img={this.state.data.photo} rkType='big' />
                <RkText rkType='header2' style={styles.text}>Gisela</RkText>
            </View>
            <View style={[styles.userInfo, styles.bordered]}>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.text}>5</RkText>
                    <RkText rkType='secondary1 hintColor'>Quests</RkText>
                </View>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.text}>{formatNumber(5)}</RkText>
                    <RkText rkType='secondary1 hintColor'>Level</RkText>
                </View>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.text}>3</RkText>
                    <RkText rkType='secondary1 hintColor'>Airports</RkText>
                </View>
            </View>

            <Gallery items={this.state.data.images} />
        </ScrollView>
    );
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    header: {
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 17,
    },
    userInfo: {
        flexDirection: 'row',
        paddingVertical: 18,
    },
    bordered: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.base,
    },
    section: {
        flex: 1,
        alignItems: 'center',
    },
    space: {
        marginBottom: 3,
    },
    separator: {
        backgroundColor: theme.colors.border.base,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 0,
        width: 1,
        height: 42,
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    button: {
        flex: 1,
        alignSelf: 'center',
    },
    text: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 20,
        paddingBottom: 5
    },
}));

