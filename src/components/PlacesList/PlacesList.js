import React from 'react';
import { View, StyleSheet } from 'react-native';

const placesList = (props) => (
<View style={styles.listContainer}>
         {props.placesList}
  </View>
)
const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
})
export default placesList;