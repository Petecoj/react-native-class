import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placesList = (props) => {
 
  return (
    <FlatList style={styles.listContainer}
              data={props.placesList}
              renderItem={(info) => (
                <ListItem 
                  placeName={info.item.name}
                  onItemPressed={()=> props.onItemSelected(info.item.key)}
                  placeImage={info.item.image}
                />
              )}
    >
     
    </FlatList>
)};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
})
export default placesList;