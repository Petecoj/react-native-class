import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';


class UserInput extends Component {
  state = {
    placeName: ""
  };

placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    console.log(this.state.placeName);
    

  };


render(){
    return (
    <View style={styles.inputContainer}>
    <TextInput 
        value={this.state.placeName}
        style={styles.textInput}
        onChangeText={this.placeNameChangedHandler}
        placeholder="An Awesome Place"

/>
    <Button title="ADD"
            onPress={this.placeSubmitHandler}/>
    </View>
    )
  };

}
const styles = StyleSheet.create({
  textInput: {
   width: "70%",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

export default UserInput