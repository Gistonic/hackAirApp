
import React from 'react';
import {
    FlatList,
    View,
    Alert,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native';
import {
    RkText,
    RkCard,
    RkButton,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import { data } from './../data';
import { PasswordTextInput } from './../components/passwordTextInput';
import { UIConstants } from './../config/appConstants';
import { scaleVertical } from './../utils/scale';
import { Icon } from 'react-native-elements'


export default class SettingsScreen extends React.Component  {
    static navigationOptions = {
        title: 'My Wallet',
    };

    state = {
        data: data.getCards(),
        modalVisible: false,
    };


  /*  gradientBaseBegin: '#ff9147',
    gradientBaseEnd: '#ff524c',
    gradientVisaBegin: '#63e2ff',
    gradientVisaEnd: '#712ec3',
    gradientMasterBegin: '#febb5b',
    gradientMasterEnd: '#f24645',
    gradientAxpBegin: '#42e695',
    gradientAxpEnd: '#3bb2bb',*/

    getCardStyle = (type) => {
        switch (type) {
            case 'visa':
                return {
                    gradient: ['#63e2ff', '#712ec3'],
                    icon: 'md-cash',
                };
            case 'mastercard':
                return {
                    gradient: ['#febb5b', '#f24645'],
                    icon: require('./../assets/icons/masterCardIcon.png'),
                };
            case 'axp':
                return {
                    gradient: ['#bdc3c7', '#2c3e50'],
                    icon: require('./../assets/icons/americanExpressIcon.png'),
                };
            default: return {};
        }
    };

    formatCurrency = (amount, currency) => {
        return `AC ${amount}`;
    };

    prepareCardNo = (cardNo) => {
        const re = /\*+/;
        const parts = cardNo.split(re);
        return {
            firstPart: parts[0],
            lastPart: parts[1],
        };
    };


    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    onItemPressed = () => {
        this.setModalVisible(true);
    };

    buyAlert = (title, message) => {
        Alert.alert('Amazing prize!', 'You have won a little Rudolff!', [
            {text: 'OK', onPress: () => console.log("")},
        ], {cancelable: false})
    };
    PremioAlert = (title, message) => {
        Alert.alert('New achievement', 'You have obtained a new achievement',[
            {text: 'See it', onPress: () => this.props.navigation.navigate('Links')},
            {text: 'OK', onPress: () => console.log("")},
        ], {cancelable: false})
    };

    extractItemKey = (item) => `${item.id}`;

    renderItem = ({ item }) => {
        const { gradient, icon } = this.getCardStyle(item.type);
        const { firstPart, lastPart } = this.prepareCardNo(item.cardNo);

        if (item.type === "visa"){
            return (
                <RkCard rkType='credit' style={styles.card}>
                    <TouchableOpacity
                        delayPressIn={70}
                        activeOpacity={0.8}
                        onPress={this.PremioAlert}>
                        <LinearGradient
                            colors={gradient}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.background}>
                            <View rkCardHeader>
                                <RkText rkType='header4 inverseColor large'>{item.bank}</RkText>
                                <Icon name='local-atm' />
                            </View>
                            <View rkCardFooter>
                                <View>
                                    <RkText rkType='header6 inverseColor'>{item.name}</RkText>
                                </View>
                                <RkText
                                    rkType='header2 inverseColor'>{this.formatCurrency(item.amount, item.currency)}
                                </RkText>
                            </View>

                        </LinearGradient>
                    </TouchableOpacity>
                </RkCard>
            );
        } else {
            return (
                <RkCard rkType='credit' style={styles.card}>
                    <TouchableOpacity
                        delayPressIn={70}
                        activeOpacity={0.8}
                        onPress={this.buyAlert}>
                        <LinearGradient
                            colors={gradient}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.background}>
                            <View rkCardHeader>
                                <RkText rkType='header4 inverseColor large'>{item.bank}</RkText>
                                <Icon name='redeem' />
                            </View>
                            <View rkCardFooter>
                                <RkText
                                    rkType='header2 inverseColor'>{this.formatCurrency(item.amount, item.currency)}
                                </RkText>
                            </View>

                        </LinearGradient>
                    </TouchableOpacity>
                </RkCard>
            );
        }
    };

    render = () => (
        <View style={styles.root}>
            <FlatList
                style={styles.list}
                showsVerticalScrollIndicator={false}
                keyExtractor={this.extractItemKey}
                data={this.state.data}
                renderItem={this.renderItem}
            />
            <Modal
                animationType="fade"
                transparent
                onRequestClose={() => this.setModalVisible(false)}
                visible={this.state.modalVisible}>
                <View style={styles.popupOverlay}>
                    <View style={styles.popup}>
                        <View style={styles.popupContent}>
                            <RkText style={styles.popupHeader} rkType='header4'>Enter security code</RkText>
                            <PasswordTextInput />
                        </View>
                        <View style={styles.popupButtons}>
                            <RkButton
                                onPress={() => this.setModalVisible(false)}
                                style={styles.popupButton}
                                rkType='clear'>
                                <RkText rkType='light'>CANCEL</RkText>
                            </RkButton>
                            <View style={styles.separator} />
                            <RkButton
                                onPress={() => this.setModalVisible(false)}
                                style={styles.popupButton}
                                rkType='clear'>
                                <RkText>OK</RkText>
                            </RkButton>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    list: {
        marginHorizontal: 16,
    },
    card: {
        marginVertical: 8,
    },
    background: {
        borderRadius: 7,
    },
    cardNoContainer: {
        flexDirection: 'row',
    },
    cardNo: {
        marginHorizontal: 8,
    },
    cardPlaceholder: {
        paddingTop: 4,
    },
    date: {
        marginTop: scaleVertical(20),
    },
    footer: {
        marginTop: 8,
        marginBottom: scaleVertical(16),
        alignItems: 'center',
    },
    button: {
        height: 56,
        width: 56,
    },
    popup: {
        backgroundColor: theme.colors.screen.base,
        marginTop: scaleVertical(70),
        marginHorizontal: 37,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: theme.colors.screen.overlay,
        flex: 1,
        marginTop: UIConstants.HeaderHeight,
    },
    popupContent: {
        alignItems: 'center',
        margin: 16,
    },
    popupHeader: {
        marginBottom: scaleVertical(45),
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: theme.colors.border.base,
    },
    popupButton: {
        flex: 1,
        marginVertical: 16,
    },
    separator: {
        backgroundColor: theme.colors.border.base,
        width: 1,
    },
}));

