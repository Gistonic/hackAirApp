import React from 'react';
import {
  Image,
  StyleSheet,
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
              this.props.navigation.navigate('Quest')}}>
              <Image style={styles.img} source={require('../assets/queuing.png')} />

          </TouchableOpacity>


          <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate('Quest')}}>
              <Image style={styles.img} source={require('../assets/justBored.png')} />

          </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
    questsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    img:{
        marginTop: 50,
    }
});



