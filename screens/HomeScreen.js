import React from 'react';
import {
    Image,
    StyleSheet, Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.questsContainer}>

          <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate('Quest1')}}>
              <Image style={styles.img} source={require('../assets/queuing.png')} />

          </TouchableOpacity>


          <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate('Quest')}}>
              <Image style={styles.img} source={require('../assets/exploring.png')} />

          </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    img:{
        marginTop: 150,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});



