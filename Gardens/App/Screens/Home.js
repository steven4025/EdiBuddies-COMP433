import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Map from './Map';

export default class Home extends React.Component {

  static navigationOptions = {
    Map: 'Map',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Components/Images/search.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    //console.log(this.props.navigation)
    const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('../Components/Images/Edible.jpg')}
            />
            <Text style={styles.description}>Providing Organic Food Options</Text>
          </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'center',
     height: '30%',
  },
  logo: {
     width: 300,
     height: 300,
     padding: 10,
  },
  description: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
  searchContainer: {
    flex: 1,
  },
  button: {
    textAlign: 'center',
    color: '#007EE9',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20
  },
});
