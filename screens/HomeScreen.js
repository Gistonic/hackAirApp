import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MenuButton from "../components/MenuButton";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.questsContainer}>
          <MenuButton  itemImage='../assets/coffe.png' amplada={'50%'}
                       ar={1} name='queueing'
                       />
          <MenuButton  itemImage='../assets/coffe.png' amplada={'50%'}
                       ar={1} name='just bored'
                       onPress={() => {
                           this.props.navigation.navigate('Quest')}}/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});



