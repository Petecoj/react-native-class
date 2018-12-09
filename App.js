/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *\   
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import UserInput from './src/components/UserInput/UserInput';
import PlacesList from './src/components/PlacesList/PlacesList';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    namePlace: '',
    places: []
  }

  namePlaceChangeHandler = (event) => {
    this.setState({
      namePlace: event
    })
  }
  submitButtonHandler = () => {
    this.setState({
      places: [...this.state.places, this.state.namePlace]
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i}
                placeName={place}
      />
    ))
    return (
      <View style={styles.container}>
      <UserInput submit={this.submitButtonHandler}
                 namePlaceChangeHandler={this.namePlaceChangeHandler}
      />
      <PlacesList placesList={placesOutput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, 
});
