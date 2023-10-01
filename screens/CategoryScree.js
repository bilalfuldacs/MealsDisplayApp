import React from 'react'
import {Meals,CATEGORIES } from '../data/Dummy_data';
import { FlatList, StyleSheet } from 'react-native';
import CategoryGridItem from '../components/CategoryGridItem';
function CategoryScree({navigation}) {
  
  function renderItem(itemData){
  
  function pressHandler(){
navigation.navigate('MealsOverview',{categoryId:itemData.item.id});
  }
  {return (<CategoryGridItem title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>)}
}
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderItem} numColumns={2}></FlatList>
  )
}

export default CategoryScree;
