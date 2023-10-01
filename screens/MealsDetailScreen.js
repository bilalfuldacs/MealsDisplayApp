import React,{useLayoutEffect} from 'react'
import { View,Text, Image, StyleSheet,ScrollView ,Button} from 'react-native';
import { MEALS } from '../data/Dummy_data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
function MealsDetailScreen({route,navigation}) {
    const catId = route.params.categoryId;
    const selectedMeals=MEALS.find((meal)=>meal.id===catId);
    const tappPressHandler=()=>{
        console.log("i am pressed");
    }
    useLayoutEffect(()=>navigation.setOptions({
        headerRight:()=>
            {return <IconButton onPress={tappPressHandler}/>}
    }),[navigation,tappPressHandler])
  return (
    <ScrollView style={styles.rootContainer}>
    <View>
               <Image  source={{ uri:selectedMeals.imageUrl }} style={styles.image} />
        <Text style={styles.title}>
            {selectedMeals.title}
            </Text>

            <MealDetails 
            textStyle={styles.detailText}
            duration={selectedMeals.duration} complexity={selectedMeals.complexity} affordability={selectedMeals.affordability}/>
       <View style={styles.listOutContainer}>
         <View  style={styles.listContainer}>   
             <SubTitle>Ingredients</SubTitle>

<List items={selectedMeals.ingredients}/>

  <SubTitle>Steps</SubTitle>

 <List items={selectedMeals.steps}/></View></View>
                </View>
                </ScrollView>
  )
}

export default MealsDetailScreen;
const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    image:{width:"100%",
    height:350},
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white',
    },
    listOutContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%',
    }
    
})