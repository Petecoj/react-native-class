import React from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

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

const UserInput = (props) => {
    return (
    <View style={styles.inputContainer}>
    <TextInput 
        // value={props.namePlace}
        style={styles.textInput}
        onChangeText={props.namePlaceChangeHandler}
        placeholder="An Awesome Place"

/>
    <Button title="ADD"
            onPress={props.submit}/>
    </View>
    )
  };
const styles = StyleSheet.create({
  textInput: {
   width: "70%",
   borderColor: "black",
   borderWidth: 1
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

export default UserInput