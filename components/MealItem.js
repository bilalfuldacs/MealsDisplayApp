import React from 'react';
import { View, Text, Pressable, Image, StyleSheet,Platform } from 'react-native';
import MealDetails from './MealDetails';
function MealItem({ title, imageUrl,duration,complexity,affordability,navigationToScreen }) {
   
  return (
    <View style={styles.mealItem}>
    <Pressable style={({pressed})=>[ pressed?styles.buttonPressed:null]} onPress={navigationToScreen}>
        <View>
      <View style={styles.ineerContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
     <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>

      </View>
    </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },

  ineerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed:{opacity:0.5},
  title: {
    fontWeight: 'bold',
    fontSize: 16, // Adjusted font size
    textAlign: 'center',
    margin:8
  },
  mealItem:{
    margin:16,
    borderRadius:16,
    overflow:Platform.OS==='android'?'hidden':'visible',
    backgroundColor:'white',
    elevation:4,
    shadowColor:'blue',
    shadowOpacity:0.5,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
  },
 
    
});
