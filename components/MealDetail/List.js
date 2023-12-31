import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function List({ items }) {
  return items.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: 'white', // Fixed typo 'wwhite' to 'white'
  },
  itemText: {
    color: 'brown',
    textAlign: 'center',
  },
});
